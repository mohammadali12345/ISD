import { Router } from 'express';
import Checkout from '../models/Checkout.model.js'; // Import the Checkout model

const router = Router();

// Route to get all checkout records
router.get('/', async (req, res) => {
    try {
        const checkouts = await Checkout.findAll();
        res.json(checkouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get a specific checkout record by ID
router.get('/:id', async (req, res) => {
    try {
        const checkout = await Checkout.findByPk(req.params.id);
        if (checkout) {
            res.json(checkout);
        } else {
            res.status(404).json({ message: 'Checkout record not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new checkout record
router.post('/', async (req, res) => {
    try {
        // Ensure the request body contains all necessary fields
        const {
            cardnumber,
            expiredate,
            cvc,
            fullname,
            address,
            city,
            state,
            zipcode
        } = req.body;

        if (!cardnumber || !expiredate || !cvc || !fullname || !address || !city || !state || !zipcode) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newCheckout = await Checkout.create({
            cardnumber,
            expiredate,
            cvc,
            fullname,
            address,
            city,
            state,
            zipcode
        });
        res.status(201).json(newCheckout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update an existing checkout record
router.put('/:id', async (req, res) => {
    try {
        const {
            cardnumber,
            expiredate,
            cvc,
            fullname,
            address,
            city,
            state,
            zipcode
        } = req.body;

        const [updated] = await Checkout.update({
            cardnumber,
            expiredate,
            cvc,
            fullname,
            address,
            city,
            state,
            zipcode
        }, {
            where: { checkoutid: req.params.id }
        });

        if (updated) {
            const updatedCheckout = await Checkout.findByPk(req.params.id);
            res.json(updatedCheckout);
        } else {
            res.status(404).json({ message: 'Checkout record not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a checkout record
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Checkout.destroy({
            where: { checkoutid: req.params.id }
        });

        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Checkout record not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
