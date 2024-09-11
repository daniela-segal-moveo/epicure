import express from 'express';
import authenticateToken from "../authMiddleware"
import { getAllChefs, getChefById, addChef, updateChef, deleteChef, getWeekChef } from '../controllers/Chefs.controller';

const router = express.Router();

router.get('/', getAllChefs);

router.get('/get/:id',getChefById)

router.post('/add',authenticateToken, addChef);

router.put('/update/:id',authenticateToken, updateChef);

router.delete('/delete/:id',authenticateToken, deleteChef);

router.get('/weekChef', getWeekChef);

export default router;
