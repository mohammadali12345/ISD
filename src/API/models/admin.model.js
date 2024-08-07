import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    createdat: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'createdat', // Matches column name in database
    },
    updatedat: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updatedat', // Matches column name in database
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'admins',
    timestamps: false, // Ensures Sequelize manages timestamps
});

export default Admin;
