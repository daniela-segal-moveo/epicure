import express from "express";
import {
  getAllDishes,
  getDishById,
  getSignatureDishes,
  addDish,
  updateDish,
  deleteDish,
} from "../controllers/Dishes.contorller";
import authenticateToken from "../authMiddleware"

const router = express.Router();

router.get("/", getAllDishes);

router.get("/get/:id", getDishById);

router.post("/add",authenticateToken, addDish);

router.put("/update/:id",authenticateToken, updateDish);

router.delete("/delete/:id",authenticateToken, deleteDish);

router.get("/signature", getSignatureDishes);

export default router;
