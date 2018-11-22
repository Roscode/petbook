defmodule PetbookWeb.SessionController do
  use PetbookWeb, :controller

  alias Petbook.Accounts.User

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
end
