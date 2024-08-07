import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Order = sequelize.define('Order', {
    orderid: { // Field name in the model
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'orderid' // Column name in the database
    },
    customerid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'customers', // Ensure the model name matches the table name in lowercase
            key: 'customerid' // Column name in the database
        },
        field: 'customerid' // Column name in the database
    },
    orderdate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'orderdate' // Column name in the database
    },
    totalamount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'totalamount' // Column name in the database
    }
}, {
    tableName: 'orders', // Table name in the database
    timestamps: false
});

export default Order;
