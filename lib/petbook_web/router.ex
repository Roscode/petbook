defmodule PetbookWeb.Router do
  use PetbookWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PetbookWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/newsfeed", PageController, :index
  end

  scope "/api/v1", PetbookWeb do
    pipe_through :api

    resources "/sessions", SessionController, only: [:create]
    resources "/users", UserController, except: [:new, :edit]
    resources "/posts", PostController
    resources "/likes", LikeController
  end
end
