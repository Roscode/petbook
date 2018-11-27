defmodule Petbook.Likes.Like do
  use Ecto.Schema
  import Ecto.Changeset

  schema "friends" do
    belongs_to :user, Petbook.Accounts.User, foreign_key: :friend1_id
    belongs_to :user, Petbook.Posts.Post, foreign_key: :friend2_id

    timestamps()
  end

  @doc false
  def changeset(like, attrs) do
    like
    |> cast(attrs, [:friend1_id, :friend2_id])
    |> validate_required([:friend1_id, friend2:_id])
  end
end
