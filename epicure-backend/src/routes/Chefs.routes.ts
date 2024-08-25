import express from 'express';
import { getAllChefs, getChefById, addChef, updateChef, deleteChef } from '../controllers/Chefs.controller';

const router = express.Router();

router.get('/', getAllChefs);

router.get('/getChef/:id', getChefById)

router.post('/addChef', addChef);

router.put('/updateChef/:id', updateChef);

router.delete('/deleteChef/:id', deleteChef);

export default router;
