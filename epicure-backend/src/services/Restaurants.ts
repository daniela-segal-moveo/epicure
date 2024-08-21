import { IRestaurant } from "../modals/Restaurant";
import Restaurant from "../modals/Restaurant";


export default {
  async getAll() {
    try {
      const restaurants = await Restaurant.find();
      return restaurants;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Could not fetch restaurants");
    }
  },

  async insertRestaurantToDB(restaurantData: IRestaurant) {
    try {
      const newRestaurant = new Restaurant(restaurantData);
      await newRestaurant.save();
      return newRestaurant;
    } catch (error) {
      console.error("Error inserting restaurant:", error);
      throw new Error("Could not insert restaurant");
    }
  },
};

