defmodule PetbookWeb.LikeController do
  use PetbookWeb, :controller

  alias Petbook.Likes
  alias Petbook.Likes.Like

  def index(conn, _params) do
    likes = Likes.list_likes()
    render(conn, "index.html", likes: likes)
  end

  def new(conn, _params) do
    changeset = Likes.change_like(%Like{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"like" => like_params}) do
    case Likes.create_like(like_params) do
      {:ok, like} ->
        conn
        |> put_flash(:info, "Like created successfully.")
        |> redirect(to: Routes.like_path(conn, :show, like))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    like = Likes.get_like!(id)
    render(conn, "show.html", like: like)
  end

  def edit(conn, %{"id" => id}) do
    like = Likes.get_like!(id)
    changeset = Likes.change_like(like)
    render(conn, "edit.html", like: like, changeset: changeset)
  end

  def update(conn, %{"id" => id, "like" => like_params}) do
    like = Likes.get_like!(id)

    case Likes.update_like(like, like_params) do
      {:ok, like} ->
        conn
        |> put_flash(:info, "Like updated successfully.")
        |> redirect(to: Routes.like_path(conn, :show, like))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", like: like, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    like = Likes.get_like!(id)
    {:ok, _like} = Likes.delete_like(like)

    conn
    |> put_flash(:info, "Like deleted successfully.")
    |> redirect(to: Routes.like_path(conn, :index))
  end
end
