import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Customer = sequelize.define('Customer', {
    customerid: { // Field name in the model
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'customerid' // Column name in the database
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'username' // Column name in the database
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'email' // Column name in the database
    },
    passwordhash: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'passwordhash' // Column name in the database
    },
    registrationdate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'registrationdate' // Column name in the database
    }
}, {
    tableName: 'customers', // Table name in the database
    timestamps: false
});

export default Customer;
