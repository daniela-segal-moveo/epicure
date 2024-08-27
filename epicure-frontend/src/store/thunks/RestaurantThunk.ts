import { createAsyncThunk } from "@reduxjs/toolkit";
import { Restaurant } from "../models/restaurant.model";
import RestaurantAdapter from "../adapters/ResturantAdapter";

export const getAllRestaurants = createAsyncThunk(
  "/getRestaurants",
  async (): Promise<Restaurant[]> => {
    try {
      const response = await RestaurantAdapter.getAllRestaurant();
      return response;
    } catch (error: any) {
      throw new Error("error fetching data");
    }
  }
);

export const getRestaurant = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id: string): Promise<Restaurant> => {
    const response = await RestaurantAdapter.getRestaurant(id);
    return response;
  }
);

export const addRestaurant = createAsyncThunk(
  "restaurants/addRestaurant",
  async (newRestaurant: Restaurant): Promise<Restaurant> => {
    const response = await RestaurantAdapter.addRestaurant(newRestaurant);
    return response;
  }
);

export const updateRestaurant = createAsyncThunk(
  "restaurants/updateChef",
  async (updatedRestaurant: Restaurant): Promise<Restaurant> => {
    const response = await RestaurantAdapter.updateRestaurant(updatedRestaurant);
    return response;
  }
);
export const deleteRestaurant = createAsyncThunk(
  "restaurants/deleteRestaurant",
  async (id: string): Promise<void> => {
    await RestaurantAdapter.deleteRestaurant(id);
  }
);
