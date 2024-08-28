import { Request, Response } from "express";
import RestaurantsService from "../services/Restaurants.service";
import { IRestaurant } from "../models/Restaurant.model";

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantsService.getAll();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getPopularRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantsService.getPopularRestaurants();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  const { id: restaurantId } = req.params;
  try {
    const restaurant = await RestaurantsService.getRestaurantById(restaurantId);
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
export const addRestaurants = async (req: Request, res: Response) => {
  const restaurant: IRestaurant = req.body;

  try {
    await RestaurantsService.addRestaurant(restaurant);
    res.status(201).json("Restaurant added");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  const { id: restaurantId } = req.params;
  const updateData = req.body;

  try {
    const updatedRestaurant = await RestaurantsService.updateRestaurant(
      restaurantId,
      updateData
    );

    if (!updatedRestaurant) {
      return res.status(404).send("Restaurant not found");
    }

    res.json(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedRestaurant = await RestaurantsService.deleteRestaurant(id);

    if (!deletedRestaurant) {
      return res.status(404).send("Restaurant not found");
    }

    res.json(deletedRestaurant);
  } catch (error) {
    console.error("Error delete restaurant:", error);
    res.status(500).send("Internal Server Error");
  }
};
