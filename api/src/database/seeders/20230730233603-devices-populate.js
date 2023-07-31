"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Devices",
      [
        { name: "MOTO G", id_category: 1, color: 'black', partNumber: 123456, createdAt: new Date(), updatedAt: new Date()},
        { name: "MOTO G", id_category: 1, color: 'red', partNumber: 123455, createdAt: new Date(), updatedAt: new Date()},
        { name: "MOTO G", id_category: 1, color: 'blue', partNumber: 112345, createdAt: new Date(), updatedAt: new Date()},
        { name: "MOTO G", id_category: 1, color: 'gray', partNumber: 212345, createdAt: new Date(), updatedAt: new Date()},
        { name: "Moto Tab G70", id_category: 2, color: 'black', partNumber: 225657, createdAt: new Date(), updatedAt: new Date()},
        { name: "Moto Tab G70", id_category: 2, color: 'gray', partNumber: 325657, createdAt: new Date(), updatedAt: new Date()},
        { name: "Moto Tab G70", id_category: 2, color: 'red', partNumber: 328657, createdAt: new Date(), updatedAt: new Date()},
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Devices", null, {});
  },
};
