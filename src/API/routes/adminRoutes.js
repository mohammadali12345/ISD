    // src/api/routes/adminRoutes.js
    import express from 'express';
    import Admin from '../models/admin.model.js';

    const router = express.Router();


    // router.post('/check-admin', async (req, res) => {
    //     const { email } = req.body;
    
    //     try {
    //         const admin = await Admin.findOne({ where: { email } });
    //         if (admin) {
    //             res.json({ isAdmin: true });
    //         } else {
    //             res.json({ isAdmin: false });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ message: 'Failed to check admin', error });
    //     }
    // });
    // Get all admins
    router.get('/', async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch admins', error });
    }
    });

    // Get an admin by ID
    router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (admin) {
        res.json(admin);
        } else {
        res.status(404).json({ message: 'Admin not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch admin', error });
    }
    });

    // Create a new admin
    router.post('/', async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create admin', error });
    }
    });

    // Update an admin
    router.put('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (admin) {
        await admin.update(req.body);
        res.json(admin);
        } else {
        res.status(404).json({ message: 'Admin not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to update admin', error });
    }
    });

    // Delete an admin
    router.delete('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (admin) {
        await admin.destroy();
        res.status(204).end();
        } else {
        res.status(404).json({ message: 'Admin not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete admin', error });
    }
    });

    export default router;
