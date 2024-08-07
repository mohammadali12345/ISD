// src/api/models/featured_products.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const FeaturedProduct = sequelize.define('featuredproducts', {
    productid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'featuredproducts',
    timestamps: false
});

export default FeaturedProduct;
