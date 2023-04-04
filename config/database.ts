export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "localhost",
      port: 5432,
      database: "igcp_database",
      user: "postgres",
      password: "postgres",
      timezone: env("TIMEZONE", "America/Sao_Paulo"),
    },
  },
});
