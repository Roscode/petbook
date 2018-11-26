defmodule PetbookWeb.LikeView do
  use PetbookWeb, :view
  alias PetbookWeb.LikeView

  def render("index.json", %{likes: likes}) do
    %{data: render_many(likes, LikeView, "like.json")}
  end

  def render("show.json", %{like: like}) do
    %{data: render_one(like, LikeView, "like.json")}
  end

  def render("like.json", %{like: like}) do
    %{id: like.id,
      likes: like.likes}
  end
end
