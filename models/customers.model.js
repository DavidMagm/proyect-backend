const { DataTypes, Sequelize, Model } = require('sequelize'); 


const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        unique: true,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
};

class Customer extends Model {
    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'customers',
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = {Customer, CustomerSchema};