import { Request, Response } from "express";
import ChefsService from "../services/Chefs.service";
import { IChef } from "../models/Chef.model";

export const getAllChefs = async (req: Request, res: Response) => {
  try {
    const chefs = await ChefsService.getAll();
    res.json(chefs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getChefById = async (req: Request, res: Response) => {
  const { id: chefId } = req.params;
  try {
    const chef = await ChefsService.getChefById(chefId);
    res.json(chef);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addChef = async (req: Request, res: Response) => {
  const chef: IChef = req.body;

  try {
    const newChef = await ChefsService.addChef(chef);
    res.status(201).json(newChef);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateChef = async (req: Request, res: Response) => {
  const { id: chefId } = req.params;
  const updateData = req.body;

  try {
    const updatedChef = await ChefsService.updateChef(chefId, updateData);

    if (!updatedChef) {
      return res.status(404).send("Chef not found");
    }

    res.json(updatedChef);
  } catch (error) {
    console.error("Error updating chef:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteChef = async (req: Request, res: Response) => {
  const { id: chefId } = req.params;

  try {
    const deletedChef = await ChefsService.deleteChef(chefId);

    if (!deletedChef) {
      return res.status(404).send("Chef not found");
    }

    res.json(deletedChef);
  } catch (error) {
    console.error("Error delete chef:", error);
    res.status(500).send("Internal Server Error");
  }
};
