import express from "express";
import DishesRouter from "./Dishes.routes";
import ChefsRouter from "./Chefs.routes"
import RestaurantsRouter from "./Restaurants.routes"

const apiRouter = express.Router({
  strict: true,
});

apiRouter.use("/dishes", DishesRouter);
apiRouter.use("/chefs", ChefsRouter)
apiRouter.use("/restaurants",RestaurantsRouter)

export default apiRouter;
