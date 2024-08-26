import { configureStore } from "@reduxjs/toolkit";
import ChefSlice from "./slices/ChefSlice"; 


export const store = configureStore({
  reducer: {
    chefs: ChefSlice, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
