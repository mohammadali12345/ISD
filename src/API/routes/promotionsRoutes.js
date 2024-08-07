// src/api/routes/promotionsRoutes.js
import express from 'express';
import Promotion from '../models/promotions.model.js';

const router = express.Router();

// Get all promotions
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.findAll();
        res.json(promotions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching promotions', error });
    }
});

// Get a promotion by ID
router.get('/:id', async (req, res) => {
    try {
        const promotion = await Promotion.findByPk(req.params.id);
        if (promotion) {
            res.json(promotion);
        } else {
            res.status(404).json({ message: 'Promotion not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching promotion', error });
    }
});

// Create a new promotion
router.post('/', async (req, res) => {
    try {
        const newPromotion = await Promotion.create(req.body);
        res.status(201).json(newPromotion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating promotion', error });
    }
});

// Update a promotion by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Promotion.update(req.body, {
            where: { promotionid: req.params.id }
        });
        if (updated) {
            const updatedPromotion = await Promotion.findByPk(req.params.id);
            res.json(updatedPromotion);
        } else {
            res.status(404).json({ message: 'Promotion not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating promotion', error });
    }
});

// Delete a promotion by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Promotion.destroy({
            where: { promotionid: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Promotion not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting promotion', error });
    }
});

export default router;
