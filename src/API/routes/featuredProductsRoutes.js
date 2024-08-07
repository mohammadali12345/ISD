// src/api/routes/featuredProductsRoutes.js
import express from 'express';
import FeaturedProduct from '../models/featuredProducts.model.js';

const router = express.Router();

// Get all featured products
router.get('/', async (req, res) => {
    try {
        const products = await FeaturedProduct.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching featured products', error });
    }
});

// Get a featured product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await FeaturedProduct.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});

// Create a new featured product
router.post('/', async (req, res) => {
    try {
        const newProduct = await FeaturedProduct.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
});

// Update a featured product by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await FeaturedProduct.update(req.body, {
            where: { productid: req.params.id }
        });
        if (updated) {
            const updatedProduct = await FeaturedProduct.findByPk(req.params.id);
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
});

// Delete a featured product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await FeaturedProduct.destroy({
            where: { productid: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
});

export default router;
