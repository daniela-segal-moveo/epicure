import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../models/restaurant.model";
import {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../thunks/RestaurantThunk";

interface RestaurantState {
    restaurants: Restaurant[];
  selectedRestaurant: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RestaurantState = {
  restaurants: [],
  selectedRestaurant: null,
  status: "idle",
  error: null,
};

const restaurantSlice = createSlice({
  name: "Restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllRestaurants.fulfilled, (state, action: any) => {
        state.restaurants = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(getRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRestaurant.fulfilled, (state, action: any) => {
        state.selectedRestaurant = action.payload.id;
        state.status = "succeeded";
      })
      .addCase(getRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(addRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addRestaurant.fulfilled, (state, action: any) => {
        state.restaurants.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(updateRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateRestaurant.fulfilled, (state, action: any) => {
        const index = state.restaurants.findIndex(
          (restaurant) => restaurant.id === action.payload.id
        );
        if (index !== -1) {
          state.restaurants[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(deleteRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteRestaurant.fulfilled, (state, action: any) => {
        const index = state.restaurants.findIndex(
          (restaurant) => restaurant.id === action.payload.id
        );
        if (index !== -1) {
          state.restaurants.splice(index, 1);
        }
        state.status = "succeeded";
      })
      .addCase(deleteRestaurant.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default restaurantSlice.reducer;