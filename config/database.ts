// Local Teste
// export default ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: "3.136.141.152",
//       port: 5432,
//       database: "igc_database",
//       user: "admin",
//       password: "Sage@2854",
//       timezone: env("TIMEZONE", "America/Sao_Paulo"),
//     },
//   },
// });

// Original
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
