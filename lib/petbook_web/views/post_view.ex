defmodule PetbookWeb.PostView do
  use PetbookWeb, :view
  alias PetbookWeb.PostView

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      email: post.email,
      password_hash: post.password_hash,
      admin: post.admin}
  end
end

