import express from 'express';
import { getAllDishes, getDishById, addDish, updateDish, deleteDish } from '../controllers/Dishes.contorller';

const router = express.Router();

router.get('/', getAllDishes);

router.get('/getDish/:id', getDishById)

router.post('/addDish', addDish);

router.put('/updateDish/:id', updateDish);

router.delete('/deleteDish/:id', deleteDish);

export default router;
