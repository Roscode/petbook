defmodule Petbook.Pets.Pet do
  use Ecto.Schema
  import Ecto.Changeset


  schema "pets" do
    field :age, :integer
    field :birthday, :date
    field :gender, :string
    field :name, :string
    field :species, :string
    field :toy, :string
    field :treat, :string
    
    belongs_to :user, Petbook.Accounts.User, foreign_key: :owner_id

    timestamps()
  end

  @doc false
  def changeset(pet, attrs) do
    pet
    |> cast(attrs, [:name, :species, :age, :birthday, :gender, :treat, :toy])
    |> validate_required([:name, :species, :age, :birthday, :gender, :treat, :toy])
  end
end
