const {models} = require('../database/database');
const boom = require('@hapi/boom');

class UsersServices {
    constructor() {
        this.users = [];
    }

    async create(data) {
        const newUser = await models.User.create(data)
        return newUser
    }

    async find() {
        const response = await models.User.findAll({
            include: ['customer']
        })
        return response
    }

    async findOne(id) {
        const user = await models.User.findByPk(id)
        if(!user) {
            throw boom.badRequest('no encontramos al usuario')
        }
        return user
    }

    async update(id, change) {
        const user = await this.findOne(id)
        const response = await user.update(change)
        return response
    }

    async delete(id) {
        const user = await this.findOne(id)
        const response = await user.destroy()
        return response
    }
}

module.exports = UsersServices;