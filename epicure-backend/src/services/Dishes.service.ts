import Dish from "../models/Dish.model";
import { IDish } from "../models/Dish.model";
import Restaurant from "../models/Restaurant.model";
import { ObjectId } from "mongoose";
export default {
  async getAll() {
    try {
      const dishes = await Dish.find().populate("restaurantId");
      return dishes;
    } catch {
      console.log("error fetching data");
    }
  },

  async getSignatureDishes() {
    try {
      const dishes = await Dish.find({ isSignature: true }).populate(
        "restaurantId"
      );
      return dishes;
    } catch {
      console.log("error fetching data");
    }
  },

  async getDishById(dishId: string) {
    dishId = dishId.trim();

    try {
      const dish = await Dish.findById(dishId);
      if (!dish) {
        throw new Error("Could not find dish");
      }
      return dish;
    } catch (error) {
      console.error("Error finding dish:", error);
      throw new Error("Could not find dish");
    }
  },

  async addDish(dishData: IDish) {
    try {
      const newDish = new Dish(dishData);
      const savedDish: IDish = await newDish.save();

      if (dishData.restaurantId) {
        const restaurant = await Restaurant.findById(dishData.restaurantId);

        if (restaurant) {
          restaurant.dishes.push(savedDish._id as ObjectId);
          await restaurant.save();
        } else {
          throw new Error(
            `Restaurant with ID ${dishData.restaurantId} not found`
          );
        }
      }
      return newDish.populate("restaurantId");
    } catch (error) {
      console.error("Error inserting dish:", error);
      throw new Error("Could not insert dish");
    }
  },

  async updateDish(dishId: string, updateData: IDish) {
    dishId = dishId.trim();

    const existingDish = await Dish.findById(dishId).exec();
    if (!existingDish) throw new Error("Dish not found");

    const oldRestaurantId = existingDish.restaurantId;
    const newRestaurantId = updateData.restaurantId;

    try {
      if (updateData.restaurantId) {
        const restaurantExists = await Restaurant.findById(
          updateData.restaurantId
        );
        if (!restaurantExists) throw new Error("restaurant not exist in DB");
      }

      const updatedDish = await Dish.findByIdAndUpdate(
        dishId,
        { $set: updateData },
        { new: true, runValidators: true }
      );

      await Restaurant.updateOne(
        { _id: oldRestaurantId },
        { $pull: { dishes: dishId } } // Remove dishId from the dishes array
      ).exec();

      await Restaurant.updateOne(
        { _id: newRestaurantId, dishes: { $ne: dishId } }, // Check if dishId is not already in the dishes array
        { $addToSet: { dishes: dishId } } // Add dishId to the dishes array
      ).exec();

      return updatedDish?.populate("restaurantId");
    } catch (error) {
      console.error("Error updating dish:", error);
      throw new Error("Could not update dish");
    }
  },

  async deleteDish(dishId: string) {
    dishId = dishId.trim();

    try {
      const deletedDish = await Dish.findByIdAndDelete(dishId);

      if (!deletedDish) {
        throw new Error(" Dish not found");
      }

      // delete dish from resturant dishes[] by the dishId

      await Restaurant.updateMany(
        { dishes: dishId },
        { $pull: { dishes: dishId } }
      );

      return deletedDish.populate("restaurantId");
    } catch (error) {
      console.error("Error deleting dish:", error);
      throw new Error("Could not delete dish");
    }
  },
};
