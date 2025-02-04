const router = require('express').Router();
const CategoriesService = require('../services/categories.service');
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
    async (req, res) => {
    try {
        const { id } = req.params;
        const category = await service.findOne(id);
        res.json(category);
    } catch(error) {
        next(error);
    }
});

router.post('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;