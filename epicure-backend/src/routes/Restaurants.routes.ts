import express from "express";
import {
  getAllRestaurants,
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

export default router;
