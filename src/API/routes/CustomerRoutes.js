import express from 'express';
import Customer from '../models/Customer.model.js'; // Make sure this path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Secret for JWT (Replace with your actual secret)
const JWT_SECRET = 'your_jwt_secret';

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);  // Log detailed error
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get a single customer
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error fetching customer:', error);  // Log detailed error
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Register a new customer
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingCustomer = await Customer.findOne({ where: { email } });
        if (existingCustomer) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new customer
        const customer = await Customer.create({
            username,
            email,
            passwordhash: hashedPassword,
        });

        res.status(201).json({ message: 'Customer registered successfully', customer });
    } catch (error) {
        console.error('Error during registration:', error);  // Log detailed error
        res.status(500).json({ message: 'An error occurred during registration', error: error.message });
    }
});

// Login a customer
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const customer = await Customer.findOne({ where: { email } });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Compare password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, customer.passwordhash);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: customer.customerid }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);  // Log detailed error
        res.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
});

// Update a customer
router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            await customer.update(req.body);
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error updating customer:', error);  // Log detailed error
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a customer
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            await customer.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error deleting customer:', error);  // Log detailed error
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
