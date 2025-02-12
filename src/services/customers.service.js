const {models} = require('../database/database');
const boom = require('@hapi/boom');


class CustomerService {
    constructor() {
        this.customers = [];
    }

    async create(data) {
        const newCustomer = await models.Customer.create(data, {
            include: ['user']
        }
        )
        return newCustomer
    }

    async find() {
        const response = await models.Customer.findAll({
            include: ['user']
        })
        return response
    }

    async findOne(id) {
        const customer = await models.Customer.findByPk(id)
        if(!customer) {
            throw boom.badRequest('no encontramos al usuario')
        }
        return customer
    }

    async update(id, change) {
        const customer = await this.findOne(id)
        const response = await customer.update(change)
        return response
    }

    async delete(id) {
        const customer = await this.findOne(id)
        const response = await customer.destroy()
        return response
    }
}

module.exports = CustomerService;