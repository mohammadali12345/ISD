import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Cart = sequelize.define('Cart', {
    cartid: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'cartid'
    },
    customerid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'customers',
            key: 'customerid'
        },
        field: 'customerid'
    },
    productid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'productid'
        },
        allowNull: true, // Make it nullable
        field: 'productid'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true, // Make it nullable
        field: 'quantity'
    },
    productname: {
        type: DataTypes.STRING,
        field: 'productname'
    },
    productdescription: {
        type: DataTypes.TEXT,
        field: 'productdescription'
    },
    productprice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // Make it nullable
        field: 'productprice'
    },
    productimageurl: {
        type: DataTypes.STRING,
        field: 'productimageurl'
    }
}, {
    tableName: 'cart',
    timestamps: false
});

export default Cart;
