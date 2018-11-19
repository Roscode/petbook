defmodule PetbookWeb.PageController do
  use PetbookWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
