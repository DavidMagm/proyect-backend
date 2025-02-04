const router = require('express').Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', 
    async (req, res, next) => {
    try {
        const products = await service.find();
        res.json(products)
    } catch(error) {
        next(error);
    }
});

router.get('/:id', 
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.json(product)
    } catch(error) {
        next(error);
    }  
});

router.post('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;

