export default {
   migrationsTableName: 'migration',
   type: "sqlite",
   // host: "email-service",
   // port: 5432,
   // username: "docker",
   // password: "docker",
   database: `${__dirname}/src/database/database.sqlite`,
   entities: [`${__dirname}/src/modules/**/entities/*{.js,.ts}`],
   migrations: [`${__dirname}/src/database/migrations/**/*{.js,.ts}`],
   synchronize: false,
   logging: false
}