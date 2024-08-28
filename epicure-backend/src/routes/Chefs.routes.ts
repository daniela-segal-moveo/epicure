import express from 'express';
import { getAllChefs, getChefById, addChef, updateChef, deleteChef } from '../controllers/Chefs.controller';

const router = express.Router();

router.get('/', getAllChefs);

router.get('/get/:id', getChefById)

router.post('/add', addChef);

router.put('/update/:id', updateChef);

router.delete('/delete/:id', deleteChef);

export default router;
