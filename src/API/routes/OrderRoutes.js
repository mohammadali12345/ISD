import express from 'express';
import Order from '../models/Order.model.js';

const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single order
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new order
router.post('/', async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an order
router.put('/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            await order.update(req.body);
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an order
router.delete('/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            await order.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
