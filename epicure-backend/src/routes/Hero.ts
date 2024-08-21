import express from "express";
import { getHeroData, insertHero, updateHero } from "../controllers/Hero";

const router = express.Router();

// Route to get all dishes
router.get("/", getHeroData);

// Route to add a new dish
router.post("/insertHero", insertHero);

// Route to edit hero content
router.put("/updateHero/:id", updateHero);

export default router;
