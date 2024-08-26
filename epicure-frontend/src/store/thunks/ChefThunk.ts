import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chef } from "../models/chef.model";
import ChefsAdapter from "../adapters/ChefAdapter";

export const getAllChefs = createAsyncThunk(
  "/getChefs",
  async (): Promise<Chef[]> => {
    try {
      const response = await ChefsAdapter.getAllChefs();
      return response;
    } catch (error: any) {
      throw new Error("error fetching data");
    }
  }
);

export const getChef = createAsyncThunk(
  "chefs/getChefById",
  async (id: string): Promise<Chef> => {
    const response = await ChefsAdapter.getChef(id);
    return response;
  }
);

export const addChef = createAsyncThunk(
  "chefs/addChef",
  async (newChef: Chef): Promise<Chef> => {
    const response = await ChefsAdapter.addChef(newChef);
    return response;
  }
);

export const updateChef = createAsyncThunk(
  "chefs/updateChef",
  async (updatedChef: Chef): Promise<Chef> => {
    const response = await ChefsAdapter.updateChef(updatedChef);
    return response;
  }
);
export const deleteChef = createAsyncThunk(
  "chefs/deleteChef",
  async (id: string): Promise<void> => {
    await ChefsAdapter.deleteChef(id);
  }
);
