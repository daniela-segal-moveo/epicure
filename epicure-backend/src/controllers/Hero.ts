import { Request, Response } from "express";
import HeroService from "../services/Hero";

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
  const { ImgUrl, header, searchBarText } = req.body;

  try {
    await HeroService.insertHero({
      ImgUrl,
      header,
      searchBarText,
    });
    res.status(201).json("hero was entered");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateHero = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;  // The data to update
  try {
    const updatedHero = await HeroService.updateHero(updateData,id);
    res.json(updatedHero);
  } catch (error) {
    console.error("Error updating hero:", error);
    res.status(500).send("Internal Server Error");
  }
};
