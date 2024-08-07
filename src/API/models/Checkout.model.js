import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Checkout = sequelize.define('Checkout', {
    checkoutid: { // Field name in the model
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'checkoutid' // Column name in the database
    },
    customerid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'customers', // Table name in the database
            key: 'customerid' // Column name in the referenced table
        },
        field: 'customerid' // Column name in the database
    },
    cardnumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'cardnumber' // Column name in the database
    },
    expiredate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'expiredate' // Column name in the database
    },
    cvc: {
        type: DataTypes.STRING(4),
        allowNull: false,
        field: 'cvc' // Column name in the database
    },
    fullname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'fullname' // Column name in the database
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'address' // Column name in the database
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'city' // Column name in the database
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'state' // Column name in the database
    },
    zipcode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: 'zipcode' // Column name in the database
    }
}, {
    tableName: 'checkout', // Table name in the database
    timestamps: false
});

export default Checkout;
