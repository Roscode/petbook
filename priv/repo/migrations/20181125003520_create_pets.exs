defmodule Petbook.Repo.Migrations.CreatePets do
  use Ecto.Migration

  def change do
    create table(:pets) do
      add :name, :string
      add :species, :string
      add :age, :integer
      add :birthday, :date
      add :gender, :string
      add :treat, :string
      add :toy, :string
      add :owner_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:pets, [:owner_id])
  end
end
