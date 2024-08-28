import express from 'express';
import { getAllChefs, getChefById, addChef, updateChef, deleteChef, getWeekChef } from '../controllers/Chefs.controller';

const router = express.Router();

router.get('/', getAllChefs);

router.get('/get/:id', getChefById)

router.post('/add', addChef);

router.put('/update/:id', updateChef);

router.delete('/delete/:id', deleteChef);

router.get('/weekChef', getWeekChef);

export default router;
