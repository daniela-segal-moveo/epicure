import axios from "axios";
import { Restaurant } from "../models/restaurant.model";

class RestaurantAdapter {
  static readonly endpoint = {
    getRestaurants: "/api/restaurants/",
    getRestaurantById: "/api/restaurants/getRestaurant",
    updateRestaurant: "/api/restaurants/updateRestaurant",
    deleteRestaurant: "/api/restaurants/deleteRestaurant",
    addRestaurant: "/api/restaurants/addRestaurant",
  };

  static async getAllRestaurant(): Promise<Restaurant[]> {
    const res = await axios.get(`${RestaurantAdapter.endpoint.getRestaurants}`);
    return res.data as Restaurant[];
  }

  static async getRestaurant(id: string): Promise<Restaurant> {
    const res = await axios.get(
      `${RestaurantAdapter.endpoint.getRestaurantById}/${id}`
    );
    return res.data as Restaurant;
  }

  static async addRestaurant(newRestaurant: Restaurant): Promise<Restaurant> {
    const res = await axios.post(
      `${RestaurantAdapter.endpoint.addRestaurant}`,
      newRestaurant
    );
    return res.data as Restaurant;
  }

  static async updateRestaurant(updatedRestaurant: Restaurant): Promise<Restaurant> {
    const res = await axios.put(
      `${RestaurantAdapter.endpoint.updateRestaurant}`,
      updatedRestaurant
    );
    return res.data as Restaurant;
  }

  static async deleteRestaurant(id: string): Promise<void> {
    await axios.delete(`${RestaurantAdapter.endpoint.deleteRestaurant}/${id}`);
  }
}

export default RestaurantAdapter;
