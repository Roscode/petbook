defmodule PetbookWeb.PetView do
  use PetbookWeb, :view
  alias PetbookWeb.PetView

  def render("index.json", %{pets: pets}) do
    %{data: render_many(pets, PetView, "pet.json")}
  end

  def render("show.json", %{pet: pet}) do
    %{data: render_one(pet, PetView, "pet.json")}
  end

  def render("pet.json", %{pet: pet}) do
    %{
      id: pet.id,
      age: pet.age,
      birthday: pet.birthday,
      gender: pet.gender,
      name: pet.name,
      species: pet.species,
      toy: pet.toy,
      treat: pet.treat,
      owner: pet.owner_id
    }
  end
end
