import express from 'express';
import { getAllRestaurants, addRestaurants } from '../controllers/Restaurants';

const router = express.Router();

// Route to get all dishes
router.get('/', getAllRestaurants);

// Route to add a new dish
router.post('/addRestaurant', addRestaurants);

export default router;
