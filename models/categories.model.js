const {Model, Sequelize, DataTypes} = require('sequelize');

const CategoriesSchema = {
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
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
};

class Category extends Model {
    static associate(models) {
        this.hasMany(models.Product, { foreignKey: 'categoryId', as: 'products' });
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Category',
            tableName: 'categories',
            timestamps: false
        }
    }
}

module.exports = {CategoriesSchema, Category};