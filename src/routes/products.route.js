const router = require('express').Router();
const validateHandler = require('../middleware/validaterHandler');
const ProductsService = require('../services/products.service');
const { createProductSchema, getProductSchema } = require('../shemas/products.schema');
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
    validateHandler(getProductSchema, 'query'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.json(product)
    } catch(error) {
        next(error);
    }  
});

router.post('/', 
    validateHandler(createProductSchema, 'body'),
    async (req, res) => {
    const product = req.body;
    const newProduct = await service.create(product); 
    res.json(newProduct);
});

module.exports = router;

