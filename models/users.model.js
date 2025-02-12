const {Model, Sequelize, DataTypes} = require('sequelize');

const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    role: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'customer'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
};

class User extends Model {
    static associate(models) {
        //this.hasOne(models.Category, { foreignKey: 'categoryId', as: 'category' });
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: false
        }
    }
}

module.exports = {UserSchema, User};