// config/sequelize.js
import { Sequelize } from 'sequelize';
import config from './db.js';

const sequelize = new Sequelize(
    config.DATABASE_NAME,
    config.DATABASE_USERNAME,
    config.DATABASE_PASSWORD,
    {
        host: config.DATABASE_HOST,
        port: config.DATABASE_PORT, 
        dialect: config.DATABASE_DIALECT,
        logging: false // Disable logging if not needed
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;
