import { Request, Response } from "express";
import DishesService from "../services/Dishes.service";
import { IDish } from "../models/Dish.model";

export const getAllDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await DishesService.getAll();
    res.json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getDishById = async (req: Request, res: Response) => {
  const { id: dishId } = req.params;
  try {
    const dish = await DishesService.getDishById(dishId);
    res.json(dish);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addDish = async (req: Request, res: Response) => {
  const dish: IDish = req.body;

  try {
    const newDish = await DishesService.addDish(dish);
    res.status(201).json(newDish);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateDish = async (req: Request, res: Response) => {
  const { id: dishId } = req.params;
  const updateData = req.body;

  try {
    const updatedDish = await DishesService.updateDish(dishId, updateData);

    if (!updatedDish) {
      return res.status(404).send("Dish not found");
    }

    res.json(updatedDish);
  } catch (error) {
    console.error("Error updating dish:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  const { id: dishId } = req.params;

  try {
    const deletedDish = await DishesService.deleteDish(dishId);

    if (!deletedDish) {
      return res.status(404).send("Dish not found");
    }

    res.json(deletedDish);
  } catch (error) {
    console.error("Error delete dish:", error);
    res.status(500).send("Internal Server Error");
  }
};
