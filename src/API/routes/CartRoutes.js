import express from 'express';
import Cart from '../models/Cart.model.js';

const router = express.Router();

// Get all cart items
router.get('/', async (req, res) => {
    try {
        const cartItems = await Cart.findAll();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get cart items for a specific customer
router.get('/customer/:customerId', async (req, res) => {
    try {
        const cartItems = await Cart.findAll({ where: { customerid: req.params.customerId } });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add item to cart
router.post('/', async (req, res) => {
    try {
        const cartItem = await Cart.create(req.body);
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a cart item
router.put('/:id', async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (cartItem) {
            await cartItem.update(req.body);
            res.json(cartItem);
        } else {
            res.status(404).json({ message: 'Cart item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Remove an item from the cart
router.delete('/:id', async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (cartItem) {
            await cartItem.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Cart item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
