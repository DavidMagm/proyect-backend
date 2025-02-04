'use strict';

const { CategoriesSchema } = require('../models/categories.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('categories', CategoriesSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
