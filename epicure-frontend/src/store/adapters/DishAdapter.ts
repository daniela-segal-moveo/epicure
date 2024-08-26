import axios from "axios";
import { Dish } from "../models/dish.model";

class DishesAdapter {
  static readonly endpoint = {
    getDishes: "/api/dishes/",
    getDishById: "/api/dishes/getDish",
    updateDish: "/api/dishes/updateDish",
    deleteDish: "/api/dishes/deleteDish",
    addDish: "/api/dishes/addDish",
  };

  static async getAllDishes(): Promise<Dish[]> {
    const res = await axios.get(`${DishesAdapter.endpoint.getDishes}`);
    return res.data as Dish[];
  }

  static async getDish(id: string): Promise<Dish> {
    const res = await axios.get(`${DishesAdapter.endpoint.getDishById}/${id}`);
    return res.data as Dish;
  }

  static async addDish(newDish: Dish): Promise<Dish> {
    const res = await axios.post(`${DishesAdapter.endpoint.addDish}`, newDish);
    return res.data as Dish;
  }

  static async updateDish(updatedChef: Dish): Promise<Dish> {
    const res = await axios.put(
      `${DishesAdapter.endpoint.updateDish}`,
      updatedChef
    );
    return res.data as Dish;
  }

  static async deleteDish(id: string): Promise<void> {
    await axios.delete(`${DishesAdapter.endpoint.deleteDish}/${id}`);
  }
}

export default DishesAdapter;
