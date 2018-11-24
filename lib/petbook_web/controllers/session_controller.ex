defmodule PetbookWeb.SessionController do
  use PetbookWeb, :controller

  alias Petbook.Accounts.User

  # To Create a normal login session using an email and password.
  def create(conn, %{"email" => email, "password" => password}) do
    with %User{} = user <- Petbook.Accounts.get_and_auth_user(email, password) do
      resp = %{
        data: %{
          token: Phoenix.Token.sign(PetbookWeb.Endpoint, "user_id", user.id),
          user_id: user.id
        }
      }

      conn
      |> put_resp_header("content-type", "application/json; charset=utf-8")
      |> send_resp(:created, Jason.encode!(resp))
    else
      _err ->
        conn
        |> put_resp_header("content-type", "application/json; charset=utf-8")
        |> send_resp(:unauthorized, Jason.encode!(%{error: "unauthorized"}))
    end
  end

  # To create a googlesign in session using the idToken
  def create(conn, %{"idToken" => idToken}) do
    case HTTPoison.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{idToken}") do
      {:ok, %HTTPoison.Response{body: body}} ->
        %{ "sub" => google_id, "email" => email } = Jason.decode!(body)
        with %User{} = user <- Petbook.Accounts.get_user_by_google_id(google_id) do
          resp = %{
            data: %{
              token: Phoenix.Token.sign(PetbookWeb.Endpoint, "user_id", user.id),
              user_id: user.id
            }
          }
          conn
          |> put_resp_header("content-type", "application/json; charset=utf-8")
          |> send_resp(:created, Jason.encode!(resp))
        else
          _err ->
            {:ok, user} = Petbook.Accounts.create_user(%{"email" => email, "google_id" => google_id})
            resp = %{
              data: %{
                token: Phoenix.Token.sign(PetbookWeb.Endpoint, "user_id", user.id)
              }
            }
            conn
            |> put_resp_header("content-type", "application/json; charset=utf-8")
            |> send_resp(:created, Jason.encode!(resp))
        end
      {:error, %HTTPoison.Error{reason: reason}} ->
        conn
        |> put_resp_header("content-type", "application/json; charset=utf-8")
        |> send_resp(:unauthorized, Jason.encode!(%{error: "unauthorized #{reason}"}))
      {ok, e} ->
        IO.inspect(ok)
        IO.inspect(e)
        IO.inspect(e.body)
        conn
        |> put_resp_header("content-type", "application/json; charset=utf-8")
        |> send_resp(:unauthorized, Jason.encode!(%{error: "unauthorized"}))
    end
  end
end
