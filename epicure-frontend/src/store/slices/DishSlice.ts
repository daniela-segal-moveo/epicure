import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../models/dish.model";
import {
  getAllDishes,
  getDish,
  addDish,
  updateDish,
  deleteDish,
} from "../thunks/DishThunk";

interface DishState {
  dishes: Dish[];
  selectedDish: Dish | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DishState = {
  dishes: [],
  selectedDish: null,
  status: "idle",
  error: null,
};

const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDishes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllDishes.fulfilled, (state, action: any) => {
        state.dishes = action.payload;
        state.status = "succeeded";
      })
      .addCase(getAllDishes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(getDish.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDish.fulfilled, (state, action: any) => {
        state.selectedDish = action.payload;
        state.status = "succeeded";
      })
      .addCase(getDish.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(addDish.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addDish.fulfilled, (state, action: any) => {
        state.dishes.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addDish.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(updateDish.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDish.fulfilled, (state, action: any) => {
        const index = state.dishes.findIndex(
          (dish) => dish.id === action.payload.id
        );
        if (index !== -1) {
          state.dishes[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateDish.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(deleteDish.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDish.fulfilled, (state, action: any) => {
        const index = state.dishes.findIndex(
          (dish) => dish.id === action.payload.id
        );
        if (index !== -1) {
          state.dishes.splice(index, 1);
        }
        state.status = "succeeded";
      })
      .addCase(deleteDish.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default dishSlice.reducer;
