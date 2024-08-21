import { Request, Response } from "express";
import ChefsService from "../services/Chefs";

// Controller function to get all chefs
export const getAllChefs = async (req: Request, res: Response) => {
  try {
    const chefs = await ChefsService.getAll();
    res.json(chefs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to add a new chef
export const addChef = async (req: Request, res: Response) => {
  const { name, bio, imageUrl, createdAt } = req.body;

  try {
    const newDish = await ChefsService.insertChefToDB({
      name,
      bio,
      imageUrl,
      createdAt: createdAt || new Date(),
    });
    res.status(201).json(newDish);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
