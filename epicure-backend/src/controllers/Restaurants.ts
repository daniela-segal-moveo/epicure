import { Request, Response } from "express";
import RestaurantsService from "../services/Restaurants";

// Controller function to get all dishes
export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantsService.getAll();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to add a new dish
export const addRestaurants = async (req: Request, res: Response) => {
  const {
    name,
    location,
    chef,
    dishes,
    isPopular,
    stars,
    imageUrl,
    createdAt,
  } = req.body;

  try {
    await RestaurantsService.insertRestaurantToDB({
      name,
      location,
      chef,
      dishes,
      isPopular,
      stars,
      imageUrl,
      createdAt: createdAt || new Date(),
    });
    res.status(201).json("Restaurant added");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
