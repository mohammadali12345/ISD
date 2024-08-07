import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const ContactUs = sequelize.define('ContactUs', {
    contactid: { // Field name in the model
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'contactid' // Column name in the database
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'name' // Column name in the database
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'email' // Column name in the database
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'message' // Column name in the database
    },
    contactdate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'contactdate' // Column name in the database
    }
}, {
    tableName: 'contactus', // Table name in the database
    timestamps: false
});

export default ContactUs;
