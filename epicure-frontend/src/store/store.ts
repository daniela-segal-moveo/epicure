import { configureStore } from "@reduxjs/toolkit";
import ChefSlice from "./slices/ChefSlice";
import DishesSlice from "./slices/DishSlice";

export const store = configureStore({
  reducer: {
    chefs: ChefSlice,
    dishes: DishesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
