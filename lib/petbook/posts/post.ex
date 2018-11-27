defmodule Petbook.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :content, :string

    belongs_to :user, Petbook.Accounts.User

    has_many :likes, Petbook.Likes.Like

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:content, :user_id])
    |> validate_required([:content])
  end
end
