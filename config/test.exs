use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :petbook, PetbookWeb.Endpoint,
  http: [port: 4002],
  server: false

get_secret = fn name ->
  base = Path.expand("~/.config/petbook")
  File.mkdir_p!(base)
  path = Path.join(base, name)
  unless File.exists?(path) do
    secret = Base.encode16(:crypto.strong_rand_bytes(32))
    File.write!(path, secret)
  end
  String.trim(File.read!(path))
end


# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :petbook, Petbook.Repo,
  username: "petbook",
  password: get_secret.("db_pass"),
  database: "petbook_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
