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

      console.log(restaurantData.chef)

      await Chef.updateOne(
        { _id: restaurantData.chef, restaurants: { $ne: populatedRestaurant?._id } }, 
        { $addToSet: { restaurants: populatedRestaurant?._id } } 
      ).exec();

      return populatedRestaurant;
    } catch (error) {
      console.error("Error inserting restaurant:", error);
      throw new Error("Could not insert restaurant");
    }
  },

  async updateRestaurant(restaurantId: string, updateData: IRestaurant) {
    restaurantId = restaurantId.trim();

    const existingRestaurant = await Restaurant.findById(restaurantId).exec();
    if (!existingRestaurant) throw new Error("Restaurant not found");

    const oldChefId = existingRestaurant.chef;
    const newChefId = updateData.chef;

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

        await Chef.updateOne(
          { _id: oldChefId },
          { $pull: { restaurants: restaurantId } } 
        ).exec();
  
        await Chef.updateOne(
          { _id: updateData.chef, restaurants: { $ne: restaurantId } }, 
          { $addToSet: { restaurants: restaurantId } } 
        ).exec();

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

      console.log(restaurantId)

      await Chef.updateMany(
        { restaurants: restaurantId },
        { $pull: { restaurants: restaurantId } }
      );

      await Dish.updateMany(
        { restaurantId: restaurantId },
        { $unset: { restaurantId: "" } }
    );

      return deletedRestaurant;
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      throw new Error("Could not delete restaurant");
    }
  },
};
