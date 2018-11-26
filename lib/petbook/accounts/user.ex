defmodule Petbook.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :admin, :boolean, default: false
    field :email, :string
    field :password_hash, :string
    field :google_id, :string
    field :age, :integer
    field :birthday, :date
    field :gender, :string
    field :name, :string
    field :species, :string
    field :toy, :string
    field :treat, :string

    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password, :password_confirmation, :google_id])
    |> unique_constraint(:email)
    |> hash_password()
    |> validate_required([:email])
    |> validate_required_attrs([:password_hash, :google_id])
  end

  # Based on a stack overflow answer to how to require any one of a number of fields
  # found here: https://stackoverflow.com/a/42212602
  def validate_required_attrs(changeset, fields) do
    if Enum.any?(fields, &present?(changeset, &1)) do
      changeset
    else
      add_error(changeset, hd(fields), "One of the following must be present: #{inspect fields}")
    end
  end

  def present?(changeset, field) do
    value = get_field(changeset, field)
    value && value != ""
  end

  def hash_password(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Argon2.add_hash(password))
  end

  def hash_password(changeset), do: changeset
end
