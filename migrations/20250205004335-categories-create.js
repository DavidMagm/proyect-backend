'use strict';

const { UserSchema } = require('../models/users.model');
const { CustomerSchema } = require('../models/customers.model');
const { CategoriesSchema } = require('../models/categories.model');
const { ProductSchema } = require('../models/products.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', UserSchema);
    await queryInterface.createTable('customers', CustomerSchema);
    await queryInterface.createTable('categories', CategoriesSchema);
    await queryInterface.createTable('products', ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
    await queryInterface.createTable('users');
    await queryInterface.createTable('customers');
    await queryInterface.createTable('products');
  }
};
