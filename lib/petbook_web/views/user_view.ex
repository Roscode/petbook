defmodule PetbookWeb.UserView do
  use PetbookWeb, :view
  alias PetbookWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      password_hash: user.password_hash,
      admin: user.admin,
      age: user.age,
      birthday: user.birthday,
      gender: user.gender,
      name: user.name,
      species: user.species,
      toy: user.toy,
      treat: user.treat
    }
  end
end
