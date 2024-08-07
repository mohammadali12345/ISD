import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Product = sequelize.define('Product', {
    productid: { // Field name in the model
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'productid' // Column name in the database
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'name' // Column name in the database
    },
    description: {
        type: DataTypes.TEXT,
        field: 'description' // Column name in the database
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'price' // Column name in the database
    },
    categoryid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories', // Ensure the model name matches the table name in lowercase
            key: 'categoryid' // Column name in the database
        },
        field: 'categoryid' // Column name in the database
    },
    brand: {
        type: DataTypes.STRING(100),
        field: 'brand' // Column name in the database
    },
    imageurl: {
        type: DataTypes.STRING(255),
        field: 'imageurl' // Column name in the database
    }
}, {
    tableName: 'products', // Table name in the database
    timestamps: false
});

export default Product;
