const {Sequelize} = require('sequelize');
const {config} = require('../../config');
const setUpModels = require('../../models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
    dialect: 'postgres'
}

if(config.isProd) {
    options.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}

const sequelize = new Sequelize(config.dbUrl, options);

setUpModels(sequelize);

module.exports = sequelize;