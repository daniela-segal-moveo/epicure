import express from "express";
import { getHeroData, insertHero, updateHero } from "../controllers/Hero.contorller";

const router = express.Router();

router.get("/", getHeroData);

router.post("/insertHero", insertHero);

router.put("/updateHero/:id", updateHero);

export default router;
