import { Restaurant } from "../models/restaurant.model";
import HttpClient from "../../services/HttpsClientService";

class RestaurantAdapter {
  static readonly endpoint = {
    getRestaurants: "/api/restaurants/",
    getRestaurantById: "/api/restaurants/get",
    updateRestaurant: "/api/restaurants/update",
    deleteRestaurant: "/api/restaurants/delete",
    addRestaurant: "/api/restaurants/add",
  };

  static async getAllRestaurant(): Promise<Restaurant[]> {
    const res = await HttpClient.getAll(
      RestaurantAdapter.endpoint.getRestaurants
    );
    return res.data as Restaurant[];
  }

  static async getRestaurant(id: string): Promise<Restaurant> {
    const res = await HttpClient.get(
      RestaurantAdapter.endpoint.getRestaurantById,
      id
    );
    return res.data as Restaurant;
  }

  static async addRestaurant(newRestaurant: Restaurant): Promise<Restaurant> {
    const res = await HttpClient.add(
      `${RestaurantAdapter.endpoint.addRestaurant}`,
      newRestaurant
    );
    return res.data as Restaurant;
  }

  static async updateRestaurant(
    updatedRestaurant: Restaurant
  ): Promise<Restaurant> {
    const res = await HttpClient.update(
      RestaurantAdapter.endpoint.updateRestaurant,
      updatedRestaurant.id,
      updatedRestaurant
    );
    return res.data as Restaurant;
  }

  static async deleteRestaurant(id: string): Promise<Restaurant> {
    const res = await HttpClient.delete(RestaurantAdapter.endpoint.deleteRestaurant, id);
    return res.data as Restaurant;
  }
}

export default RestaurantAdapter;
