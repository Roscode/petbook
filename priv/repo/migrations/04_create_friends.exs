defmodule Petbook.Repo.Migrations.CreateFriends do
  use Ecto.Migration

  def change do
    create table(:friends) do
      add :friend1_id, references(:users, on_delete: :delete_all)
      add :friend2_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:friends, [:friend1_id])
    create index(:friends, [:friend2_id])
  end
end
