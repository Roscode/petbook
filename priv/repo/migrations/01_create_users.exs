defmodule Petbook.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string
      add :password_hash, :string
      add :admin, :boolean, default: false, null: false
      add :google_id, :string
      add :age, :integer
      add :birthday, :date
      add :gender, :string
      add :name, :string
      add :species, :string
      add :toy, :string
      add :treat, :string

      timestamps()
    end

    create unique_index(:users, [:email])

  end
end
