defmodule Petbook.Friends.Friend do
  use Ecto.Schema
  import Ecto.Changeset

  schema "friends" do
    belongs_to(:friend1, Petbook.Accounts.User, foreign_key: :friend1_id)
    belongs_to(:friend2, Petbook.Accounts.User, foreign_key: :friend2_id)

    timestamps()
  end

  @doc false
  def changeset(like, attrs) do
    like
    |> cast(attrs, [:friend1_id, :friend2_id])
    |> validate_required([:friend1_id, :friend2_id])
  end
end
