import knex from "knex";

const database = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "concessionaria",
  },
});

export default database;
