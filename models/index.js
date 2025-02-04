const {ProductSchema, Product} = require('./products.model');
const {CategoriesSchema, Category} = require('./categories.model');

function setUpModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));

    Product.associate(sequelize.models);
    Category.associate(sequelize.models);
}

module.exports = setUpModels;