const { Sequelize } = require('sequelize');
const optionsDatabase = require('./config');
require('dotenv').config();

const enviroment = process.env.NODE_ENV

const sequelize = new Sequelize(
    optionsDatabase[enviroment]
);

module.exports = sequelize;