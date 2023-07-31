const database = require("../config/connection");
const { Sequelize } = require("sequelize");
const categoryModel = require('./categoryModel')

const deviceModel = database.define("devices", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(128),
    allowNull: false
  },
  id_category: {
    type: Sequelize.INTEGER
  },
  color: {
    type: Sequelize.STRING(16),
    allowNull: false
  },
  partNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: "devices"
});


deviceModel.belongsTo(categoryModel, {
  foreignKey: 'id_category'
});

deviceModel.associate = (models) => {
  deviceModel.belongsTo(models.categoryModel,{
    foreignKey: 'id_category',
    as: 'id_category'
  });
};


module.exports = deviceModel;