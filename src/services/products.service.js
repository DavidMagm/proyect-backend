const {models} = require('../database/index');

class ProductsService {
    constructor() {
        this.products = [];
    }

    async create(data) {
        const newProduct = await models.Product.create(data);
        return newProduct;
    }
    async find() {
        const products = await models.Product.findAll();
        return products;
    }
    async findOne(id) {
        const product = await models.Product.findByPk(id);
        return product;
    }
}

module.exports = ProductsService;