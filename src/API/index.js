import express from 'express';
// import bodyParser from 'body-parser'; // For parsing JSON bodies (no longer needed)
import errorHandler from './middlewares/errorHandler.js'; // Error handling middleware
import CustomerRoutes from './routes/CustomerRoutes.js'; // Import routes
import ProductRoutes from './routes/ProductRoutes.js';
import CartRoutes from './routes/CartRoutes.js';
import OrderRoutes from './routes/OrderRoutes.js';
import ContactUsRoutes from './routes/ContactUsRoutes.js';
import CheckoutRoutes from './routes/CheckoutRoutes.js';
import config from './config/db.js'; // Configuration file
import sequelize from './config/sequelize.js'; // Import Sequelize instance
import adminRoutes from './routes/adminRoutes.js';
import cors from 'cors';
import featuredProductsRoutes from './routes/featuredProductsRoutes.js';
import promotionsRoutes from './routes/promotionsRoutes.js';
import authMiddleware from './middlewares/authMiddleware.js'

const app = express();

// Middleware setup
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.use(express.json()); // Middleware to parse JSON bodies

// Route setup
app.use('/customers',authMiddleware ,CustomerRoutes);
app.use('/products',authMiddleware, ProductRoutes);
app.use('/cart', CartRoutes);
app.use('/orders', OrderRoutes);
app.use('/contact-us', ContactUsRoutes);
app.use('/checkout', CheckoutRoutes);
app.use('/admin', adminRoutes);
app.use('/featured-products', featuredProductsRoutes);
app.use('/promotions', promotionsRoutes);
// app.use('/auth', authRoutes)

// Error handling middleware (must be the last middleware)
app.use(errorHandler);

// Test database connection and sync models
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        return sequelize.sync(); // Sync all models
    })
    .then(() => {
        // Start the server
        app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database or sync models:', err);
        // Optionally, you can attempt to start the server or handle the error differently here
        // For instance, you might want to retry connection, notify administrators, etc.
    });

export default app; // Export the app for testing or further configuration
