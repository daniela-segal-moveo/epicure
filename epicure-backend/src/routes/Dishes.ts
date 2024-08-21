import express from 'express';
import { getAllDishes, addDish } from '../controllers/Dishes';

const router = express.Router();

// Route to get all dishes
router.get('/', getAllDishes);

// Route to add a new dish
router.post('/addDish', addDish);

export default router;
