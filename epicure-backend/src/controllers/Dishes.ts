import { Request, Response } from 'express';
import DishesService from '../services/Dishes';

// Controller function to get all dishes
export const getAllDishes = async (req:Request, res:Response) => {
  try {
    const dishes = await DishesService.getAll();
    res.json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to add a new dish
export const addDish = async (req: Request, res: Response) => {
  const { name, ingredients, description, imageUrl, price, isSignature, restaurantId, createdAt } = req.body;

  try {
    const newDish = await DishesService.insertDishToDB({
      name,
      ingredients,
      description,
      imageUrl,
      price,
      isSignature,
      restaurantId,
      createdAt: createdAt || new Date()
    });
    res.status(201).json(newDish);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
