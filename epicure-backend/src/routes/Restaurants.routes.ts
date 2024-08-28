import express from "express";
import {
  getAllRestaurants,
  getPopularRestaurants,
  addRestaurants,
  updateRestaurant,
  getRestaurantById,
  deleteRestaurant,
} from "../controllers/Restaurants.controller";

const router = express.Router();

router.get("/", getAllRestaurants);

router.put("/get/:id", getRestaurantById);

router.post("/add", addRestaurants);

router.put("/update/:id", updateRestaurant);

router.delete("/delete/:id", deleteRestaurant);

router.get("/popular", getPopularRestaurants);

export default router;
