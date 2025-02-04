const {Model, Sequelize, DataTypes} = require('sequelize');

const ProductSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
            model: 'categories',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Product extends Model {
    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Product',
            tableName: 'products',
            timestamps: false
        }
    }
}

module.exports = {ProductSchema, Product};