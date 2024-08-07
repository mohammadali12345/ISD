// src/api/models/promotions.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Promotion = sequelize.define('promotion', {
    promotionid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imagesrc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }
}, {
    tableName: 'promotions',
    timestamps: false
});

export default Promotion;
