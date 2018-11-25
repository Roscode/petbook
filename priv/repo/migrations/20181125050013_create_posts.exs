defmodule Petbook.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :content, :text
      add :pet_id, references(:pets, on_delete: :cascade)

      timestamps()
    end

    create index(:posts, [:pet_id])
  end
end
