const {models} = require('../database/index');

class CategoriesService {
    constructor() {
        this.products = [];
    }

    async create(data) {
        const newCategory = await models.Category.create(data);
        return newCategory;
    }
    async find() {
        const Categories = await models.Category.findAll();
        return Categories;
    }
    async findOne(id) {
        const category = await models.Category.findByPk(id);
        return category;
    }
}

module.exports = CategoriesService;