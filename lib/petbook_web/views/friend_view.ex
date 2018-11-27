defmodule PetbookWeb.FriendView do
    use PetbookWeb, :view
    alias PetbookWeb.FriendView
  
    def render("index.json", %{friends: friends}) do
      %{data: render_many(friends, FriendView, "friend.json")}
    end
  
    def render("show.json", %{friend: friend}) do
      %{data: render_one(friend, FriendView, "friend.json")}
    end
  
    def render("friend.json", %{friend: friend}) do
      %{
        friend1: friend.friend1_id,
        friend2: friend.friend2_id
      }
    end
  end
  