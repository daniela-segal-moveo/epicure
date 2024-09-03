import express from "express";
import {
  getAllDishes,
  getDishById,
  getSignatureDishes,
  addDish,
  updateDish,
  deleteDish,
} from "../controllers/Dishes.contorller";

const router = express.Router();

router.get("/", getAllDishes);

router.get("/get/:id", getDishById);

router.post("/add", addDish);

router.put("/update/:id", updateDish);

router.delete("/delete/:id", deleteDish);

router.get("/signature", getSignatureDishes);

export default router;
