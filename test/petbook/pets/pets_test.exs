defmodule Petbook.PetsTest do
  use Petbook.DataCase

  alias Petbook.Pets

  describe "pets" do
    alias Petbook.Pets.Pet

    @valid_attrs %{age: 42, birthday: ~N[2010-04-17 14:00:00], gender: "some gender", name: "some name", species: "some species", toy: "some toy", treat: "some treat"}
    @update_attrs %{age: 43, birthday: ~N[2011-05-18 15:01:01], gender: "some updated gender", name: "some updated name", species: "some updated species", toy: "some updated toy", treat: "some updated treat"}
    @invalid_attrs %{age: nil, birthday: nil, gender: nil, name: nil, species: nil, toy: nil, treat: nil}

    def pet_fixture(attrs \\ %{}) do
      {:ok, pet} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Pets.create_pet()

      pet
    end

    test "list_pets/0 returns all pets" do
      pet = pet_fixture()
      assert Pets.list_pets() == [pet]
    end

    test "get_pet!/1 returns the pet with given id" do
      pet = pet_fixture()
      assert Pets.get_pet!(pet.id) == pet
    end

    test "create_pet/1 with valid data creates a pet" do
      assert {:ok, %Pet{} = pet} = Pets.create_pet(@valid_attrs)
      assert pet.age == 42
      assert pet.birthday == ~N[2010-04-17 14:00:00]
      assert pet.gender == "some gender"
      assert pet.name == "some name"
      assert pet.species == "some species"
      assert pet.toy == "some toy"
      assert pet.treat == "some treat"
    end

    test "create_pet/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Pets.create_pet(@invalid_attrs)
    end

    test "update_pet/2 with valid data updates the pet" do
      pet = pet_fixture()
      assert {:ok, %Pet{} = pet} = Pets.update_pet(pet, @update_attrs)
      assert pet.age == 43
      assert pet.birthday == ~N[2011-05-18 15:01:01]
      assert pet.gender == "some updated gender"
      assert pet.name == "some updated name"
      assert pet.species == "some updated species"
      assert pet.toy == "some updated toy"
      assert pet.treat == "some updated treat"
    end

    test "update_pet/2 with invalid data returns error changeset" do
      pet = pet_fixture()
      assert {:error, %Ecto.Changeset{}} = Pets.update_pet(pet, @invalid_attrs)
      assert pet == Pets.get_pet!(pet.id)
    end

    test "delete_pet/1 deletes the pet" do
      pet = pet_fixture()
      assert {:ok, %Pet{}} = Pets.delete_pet(pet)
      assert_raise Ecto.NoResultsError, fn -> Pets.get_pet!(pet.id) end
    end

    test "change_pet/1 returns a pet changeset" do
      pet = pet_fixture()
      assert %Ecto.Changeset{} = Pets.change_pet(pet)
    end
  end
end
