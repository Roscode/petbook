defmodule Petbook.Likes.Like do
  use Ecto.Schema
  import Ecto.Changeset

  schema "likes" do
    field :likes, :integer
    belongs_to :user, Petbook.Accounts.User
    belongs_to :post, Petbook.Posts.Post

    timestamps()
  end

  @doc false
  def changeset(like, attrs) do
    like
    |> cast(attrs, [:likes, :user_id, :post_id])
    |> validate_required([:likes, :user_id, :post_id])
  end
end
