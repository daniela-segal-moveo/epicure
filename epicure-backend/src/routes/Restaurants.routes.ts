import express from "express";
import {
  getAllRestaurants,
  getPopularRestaurants,
  addRestaurants,
  updateRestaurant,
  getRestaurantById,
  deleteRestaurant,
} from "../controllers/Restaurants.controller";
import authenticateToken from "../authMiddleware"

const router = express.Router();

router.get("/", getAllRestaurants);

router.put("/get/:id", getRestaurantById);

router.post("/add",authenticateToken, addRestaurants);

router.put("/update/:id",authenticateToken, updateRestaurant);

router.delete("/delete/:id",authenticateToken, deleteRestaurant);

router.get("/popular", getPopularRestaurants);

export default router;
