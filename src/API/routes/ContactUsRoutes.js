import express from 'express';
import ContactUs from '../models/ContactUs.model.js';

const router = express.Router();

// Get all contact us messages
router.get('/', async (req, res) => {
    try {
        const messages = await ContactUs.findAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single contact us message
router.get('/:id', async (req, res) => {
    try {
        const message = await ContactUs.findByPk(req.params.id);
        if (message) {
            res.json(message);
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new contact us message
router.post('/', async (req, res) => {
    try {
        const message = await ContactUs.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a contact us message
router.put('/:id', async (req, res) => {
    try {
        const message = await ContactUs.findByPk(req.params.id);
        if (message) {
            await message.update(req.body);
            res.json(message);
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a contact us message
router.delete('/:id', async (req, res) => {
    try {
        const message = await ContactUs.findByPk(req.params.id);
        if (message) {
            await message.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
