const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5);
const lastName = Joi.string().min(5);
const phone = Joi.string().min(10);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createCustomer = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: Joi.object({
        email: email.required(),
        password: password.required()
    }).required()
});

const updateCustomer = Joi.object({
    name: name,
    lastName: lastName,
    phone: phone,
    userId: userId
});

const getCustumer = Joi.object({
    id: id.required()
});

module.exports = {createCustomer, updateCustomer, getCustumer};