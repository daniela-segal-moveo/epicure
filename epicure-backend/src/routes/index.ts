import express from "express";
import DishesRouter from "../routes/Dishes";
import ChefsRouter from "../routes/Chefs"
import RestaurantsRouter from "../routes/Restaurants"

const apiRouter = express.Router({
  strict: true,
});

apiRouter.use("/dishes", DishesRouter);
apiRouter.use("/chefs", ChefsRouter)
apiRouter.use("/Restuarants",RestaurantsRouter)

export default apiRouter;
