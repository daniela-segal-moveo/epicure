import express from 'express';
import { getAllChefs, addChef } from '../controllers/Chefs';

const router = express.Router();

// Route to get all dishes
router.get('/', getAllChefs);

// Route to add a new dish
router.post('/addChef', addChef);

export default router;
