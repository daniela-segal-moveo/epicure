import { Request, Response } from "express";
import HeroService from "../services/Hero.service";
import { IHero } from "../models/Hero.model";

export const getHeroData = async (req: Request, res: Response) => {
  try {
    const hero = await HeroService.getHeroData();
    res.json(hero);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const insertHero = async (req: Request, res: Response) => {
  const newHero = req.body;

  try {
    await HeroService.insertHero(newHero);
    res.status(201).json("hero was entered");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateHero = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedHero = await HeroService.updateHero(updateData,id);
    res.json(updatedHero);
  } catch (error) {
    console.error("Error updating hero:", error);
    res.status(500).send("Internal Server Error");
  }
};
