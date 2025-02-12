const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');
const validateHandler = require('../middleware/validaterHandler');
const { createUser, getUser, updateUser } = require('../shemas/users.schema');
const service = new UsersService();

router.get('/',
    async (req, res) => {
        const users = await service.find()
        res.json(users)
});
  
router.post('/',
    validateHandler(createUser, 'body'),
    async (req, res, next) => {
        try {
        const user = req.body
        const users = await service.create(user)
        res.status(201).json(users)
        } catch(error) {
        console.log(error)
    }
});
  
router.get('/:id',
    validateHandler(getUser, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const users = await service.findOne(id)
            res.status(201).json(users)
        } catch(error) {
            console.log(error)
        }
});

router.patch('/:id',
    validateHandler(getUser, 'params'),
    validateHandler(updateUser, 'body'),
    async (req, res) => {
        try {
            const {id} = req.params;
            const user = req.body;
            const users = await service.update(id, user)
            res.json(users)
        } catch(error) {
            console.log(error)
        }
});

module.exports = router;