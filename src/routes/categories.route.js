const router = require('express').Router();
const validateHandler = require('../middleware/validaterHandler');
const CategoriesService = require('../services/categories.service');
const { createCategorySchema, getCategorySchema } = require('../shemas/categories.shema');
const service = new CategoriesService();

router.get('/', 
    async (req, res, next) => {
    try {
        const categories = await service.find();
        res.json(categories);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', 
    validateHandler(getCategorySchema, 'query'),
    async (req, res) => {
    try {
        const { id } = req.params;
        const category = await service.findOne(id);
        res.json(category);
    } catch(error) {
        next(error);
    }
});

router.post('/', 
    validateHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
    try {
        const category  = req.body;
        const newCategory = await service.create(category);
        res.json(newCategory);
    } catch(error) {
        next(error);
    }
});

module.exports = router;