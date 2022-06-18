export default {
   migrationsTableName: 'migration',
   type: process.env.DB_CONN,
   // host: process.env.DB_HOST,
   // port: process.env.DB_PORT,
   // username: process.env.DB_USER,
   // password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   // database: `${__dirname}/src/database/database.sqlite`,
   entities: [`${__dirname}/src/modules/**/entities/*{.js,.ts}`],
   migrations: [`${__dirname}/src/database/migrations/**/*{.js,.ts}`],
   synchronize: false,
   logging: false
}