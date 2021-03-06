use Mix.Config

# Configure your database
config :chatter, Chatter.Repo,
  username: "postgres",
  password: "F4u5t55!",
  database: "chatter_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :chatter, ChatterWeb.Endpoint,
  http: [port: 4002],
  server: true

# Print only warnings and errors during test
config :logger, level: :warn

config :chatter, :sql_sandbox, true
