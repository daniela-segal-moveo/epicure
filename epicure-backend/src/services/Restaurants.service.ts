import { Schema } from "inspector";
import Chef from "../models/Chef.model";
import Dish from "../models/Dish.model";
import { IRestaurant } from "../models/Restaurant.model";
import Restaurant from "../models/Restaurant.model";

export default {
  async getAll() {
    try {
      const restaurants = await Restaurant.find()
        .populate("chef")
        .populate("dishes");
      return restaurants;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Could not fetch restaurants");
    }
  },

  async getPopularRestaurants() {
    try {
      const restaurants = await Restaurant.find({ isPopular: true })
        .populate("chef")
        .populate("dishes");
        console.log(restaurants)
      return restaurants;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Could not fetch restaurants");
    }
  },

  async getRestaurantById(restaurantId: string) {
    restaurantId = restaurantId.trim();

    try {
      const restaurant = await Restaurant.findById(restaurantId)
        .populate("chef")
        .populate("dishes");
      if (!restaurant) {
        throw new Error("Could not find restaurant");
      }
      return restaurant;
    } catch (error) {
      console.error("Error finding restaurant:", error);
      throw new Error("Could not find restaurant");
    }
  },

  async addRestaurant(restaurantData: IRestaurant) {
    try {
      const newRestaurant = new Restaurant(restaurantData);
      await newRestaurant.save();
      const populatedRestaurant = await Restaurant.findById(newRestaurant._id)
        .populate("chef")
        .populate("dishes");

      return populatedRestaurant;
    } catch (error) {
      console.error("Error inserting restaurant:", error);
      throw new Error("Could not insert restaurant");
    }
  },

  async updateRestaurant(restaurantId: string, updateData: IRestaurant) {
    restaurantId = restaurantId.trim();

    try {
      if (updateData.chef) {
        const chefExist = await Chef.findById(updateData.chef);
        if (!chefExist) throw new Error("chef not exist in DB");
      }

      if (updateData.dishes && updateData.dishes.length > 0) {
        const invalidDishes = await Promise.all(
          updateData.dishes.map(async (dishId) => {
            const dish = await Dish.findById(dishId);
            if (!dish) throw new Error("chef not exist in DB");
          })
        );
      }

      const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        restaurantId,
        { $set: updateData },
        { new: true, runValidators: true }
      )
        .populate("chef")
        .populate("dishes");

      return updatedRestaurant;
    } catch (error) {
      console.error("Error updating restaurant:", error);
      throw new Error("Could not update restaurant");
    }
  },

  async deleteRestaurant(restaurantId: string) {
    restaurantId = restaurantId.trim();

    try {
      const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId)
        .populate("chef")
        .populate("dishes");

      if (!deletedRestaurant) {
        throw new Error("Restaurant not found");
      }

      await Chef.updateMany(
        { restaurants: restaurantId },
        { $pull: { restaurants: restaurantId } }
      );

      await Dish.updateMany(
        { restaurants: restaurantId },
        { $pull: { restaurants: restaurantId } }
      );

      return deletedRestaurant;
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      throw new Error("Could not delete restaurant");
    }
  },
};
