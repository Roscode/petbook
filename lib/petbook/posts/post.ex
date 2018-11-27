defmodule Petbook.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :content, :string

    belongs_to :user, Petbook.Accounts.User

    many_to_many :likes, Petbook.Accounts.User, join_through: "likes"
    # join_keys: [user_id: :id, post_id: :id]

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:content, :user_id])
    |> validate_required([:content])
  end
end
