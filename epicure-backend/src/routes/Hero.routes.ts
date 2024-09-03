import express from "express";
import { getHeroData, addHero, updateHero } from "../controllers/Hero.contorller";

const router = express.Router();

router.get("/", getHeroData);

router.post("/insertHero", addHero);

router.put("/updateHero/:id", updateHero);

export default router;
