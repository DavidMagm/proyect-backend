const {ProductSchema, Product} = require('./products.model');
const {CategoriesSchema, Category} = require('./categories.model');
const {UserSchema, User} = require('../models/users.model')
const {CustomerSchema, Customer} = require('../models/customers.model')

function setUpModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));


    User.associate(sequelize.models);
    Customer.associate(sequelize.models)
    Product.associate(sequelize.models);
    Category.associate(sequelize.models);
}

module.exports = setUpModels;