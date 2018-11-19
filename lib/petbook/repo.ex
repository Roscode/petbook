defmodule Petbook.Repo do
  use Ecto.Repo,
    otp_app: :petbook,
    adapter: Ecto.Adapters.Postgres
end
