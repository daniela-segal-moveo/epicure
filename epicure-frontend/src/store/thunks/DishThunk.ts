import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dish } from "../models/dish.model";
import DishesAdapter from "../adapters/DishAdapter";

export const getAllDishes = createAsyncThunk(
  "/getDishes",
  async (): Promise<Dish[]> => {
    try {
      const response = await DishesAdapter.getAllDishes();
      return response;
    } catch (error: any) {
      throw new Error("error fetching data");
    }
  }
);

export const getDish = createAsyncThunk(
  "dishes/getDishById",
  async (id: string): Promise<Dish> => {
    const response = await DishesAdapter.getDish(id);
    return response;
  }
);

export const addDish = createAsyncThunk(
  "dishes/addDish",
  async (newDish: Dish): Promise<Dish> => {
    const response = await DishesAdapter.addDish(newDish);
    return response;
  }
);

export const updateDish = createAsyncThunk(
  "dishes/updateDishes",
  async (updateDish: Dish): Promise<Dish> => {
    const response = await DishesAdapter.updateDish(updateDish);
    return response;
  }
);
export const deleteDish = createAsyncThunk(
  "dishes/deleteDish",
  async (id: string, thunkAPI): Promise<void> => {
    await DishesAdapter.deleteDish(id);

    // thunkAPI.dispatch(getRestaurants()); i will enter here func that will fetch resturants again --> delete dish id from resturants dishes attribute?
  }
);
