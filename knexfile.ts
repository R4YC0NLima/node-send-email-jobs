import path from 'path';

export default {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    tableName: "knex_migrations"
  },
  useNullAsDefault: true
}
// import type { Knex } from "knex";
// import path from 'path';

// // Update with your config settings.

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
//     },
    // migrations: {
    //   directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    //   tableName: "knex_migrations"
    // },
//     useNullAsDefault: true
//   },

//   staging: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   },

//   production: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   }

// };

// module.exports = config;
