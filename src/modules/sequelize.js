const Sequelize = require("sequelize");

const dbConfig = {
  host: "mysql",
  dialect: "mysql",
  port: process.env.DB_PORT,
  logging: false,
};

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  dbConfig
);

module.exports = sequelize;
