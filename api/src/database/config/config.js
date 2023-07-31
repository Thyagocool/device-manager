require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DB_DEV_DIALECT,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: process.env.DB_DEV_HOST,
  },
  test: {
    dialect: process.env.DB_TEST_DIALECT,
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host: process.env.DB_TEST_HOST,
  },
  production: {
    dialect: process.env.DB_PROD_DIALECT,
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_PROD_DATABASE,
    host: process.env.DB_PROD_HOST,
  },
};