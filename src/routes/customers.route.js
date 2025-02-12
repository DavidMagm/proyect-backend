const express = require('express');
const router = express.Router();
const CustomersService = require('../services/customers.service');
const validateHandler = require('../middleware/validaterHandler');
const { createCustomer, updateCustomer, getCustomer } = require('../shemas/customers.schema');
const service = new CustomersService();


router.get('/',
    async (req, res) => {
        const users = await service.find()
        res.json(users)
});
  
router.post('/',
    validateHandler(createCustomer, 'body'),
    async (req, res, next) => {
        try {
        const user = req.body
        const users = await service.create(user)
        res.status(201).json(users)
        } catch(error) {
        next(error)
    }
});
  
router.get('/:id',
    validateHandler(getCustomer, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const users = await service.findOne(id)
            res.status(201).json(users)
        } catch(error) {
            next(error)
        }
});

router.patch('/:id',
    validateHandler(getCustomer, 'params'),
    validateHandler(updateCustomer, 'body'),
    async (req, res) => {
        try {
            const {id} = req.params;
            const user = req.body;
            const users = await service.update(id, user)
            res.json(users)
        } catch(error) {
            next(error)
        }
});

module.exports = router;