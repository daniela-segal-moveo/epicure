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

router.put("/getRestaurant/:id", getRestaurantById);

router.post("/addRestaurant", addRestaurants);

router.put("/updateRestaurant/:id", updateRestaurant);

router.delete("/deleteRestaurants/:id", deleteRestaurant);

export default router;
