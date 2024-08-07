import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const OrderDetail = sequelize.define('OrderDetail', {
    orderdetailid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'orderdetailid'
    },
    orderid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'orders',
            key: 'orderid'
        },
        field: 'orderid'
    },
    productid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'productid'
        },
        field: 'productid'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'quantity'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'price'
    }
}, {
    tableName: 'orderdetails',
    timestamps: false
});

export default OrderDetail;
