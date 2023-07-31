const database = require("../config/connection");
const { Sequelize } = require("sequelize");

const categoryModel = database.define("categories", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(128),
    allowNull: false
  }
}, {
  tableName: "categories"
});

module.exports = categoryModel;