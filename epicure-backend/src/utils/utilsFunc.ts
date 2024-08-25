// utils/findOrCreate.ts

import Restaurant, { IRestaurant } from "../models/Restaurant.model";
import Chef, { IChef } from "../models/Chef.model";
import Dish, { IDish } from "../models/Dish.model";

// Utility function to find or create a Restaurant
export async function findOrCreateRestaurant(restaurantData: Partial<IRestaurant>): Promise<IRestaurant> {
  try {
    let restaurant = await Restaurant.findOne({ name: restaurantData.name });
    if (restaurant) {
      return restaurant;
    }
    restaurant = new Restaurant(restaurantData);
    await restaurant.save();
    return restaurant;
  } catch (error) {
    console.error("Error finding or creating restaurant:", error);
    throw new Error("Could not find or create restaurant");
  }
}

// Utility function to find or create a Chef
export async function findOrCreateChef(chefData: Partial<IChef>): Promise<IChef> {
  try {
    let chef = await Chef.findOne({ name: chefData.name });
    if (chef) {
      return chef;
    }
    chef = new Chef(chefData);
    await chef.save();
    return chef;
  } catch (error) {
    console.error("Error finding or creating chef:", error);
    throw new Error("Could not find or create chef");
  }
}

// Utility function to find or create a Dish
export async function findOrCreateDish(dishData: Partial<IDish>): Promise<IDish> {
  try {
    let dish = await Dish.findOne({ name: dishData.name });
    if (dish) {
      return dish;
    }
    dish = new Dish(dishData);
    await dish.save();
    return dish;
  } catch (error) {
    console.error("Error finding or creating dish:", error);
    throw new Error("Could not find or create dish");
  }
}
