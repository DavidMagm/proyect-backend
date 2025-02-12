const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const passsword = Joi.string().min(8);

const createUser = Joi.object({
    email: email.required(),
    password: passsword.required()
});

const updateUser = Joi.object({
    email: email,
    password: passsword
});

const getUser = Joi.object({
    id: id.required()
});

module.exports = {createUser, updateUser, getUser};