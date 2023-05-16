export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "131.196.196.29",
      port: 5432,
      database: "igc_database",
      user: "postgres",
      password: "Sage@2854",
      timezone: env("TIMEZONE", "America/Sao_Paulo"),
    },
  },
});
