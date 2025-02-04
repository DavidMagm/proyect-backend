const {Sequelize} = require('sequelize');
const {config} = require('../../config');
const setUpModels = require('../../models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres'
});

setUpModels(sequelize);

module.exports = sequelize;