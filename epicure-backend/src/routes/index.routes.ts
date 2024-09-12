import express, { Request, Response } from "express";
import DishesRouter from "./Dishes.routes";
import ChefsRouter from "./Chefs.routes";
import RestaurantsRouter from "./Restaurants.routes";
import upload from "../multer-config";
import UserRouter from "./Users.routes"
import { S3 } from "aws-sdk";
import s3 from "../aws-config"

const apiRouter = express.Router({
  strict: true,
});

apiRouter.use("/dishes", DishesRouter);
apiRouter.use("/chefs", ChefsRouter);
apiRouter.use("/restaurants", RestaurantsRouter);
apiRouter.use("/user",UserRouter)

apiRouter.post(
  "/upload",
  upload.single("image"),
  (req: Request, res: Response) => {
    const bucketName = process.env.S3_BUCKET_NAME;
    if (!bucketName) {
      return res.status(500).send("S3 bucket name is not defined");
    }

    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded");
    }

    console.log(":-)")

    const params = {
      Bucket: bucketName,
      Key: file.originalname,
      Body: file.buffer,
    };

    console.log(params)

    s3.upload(params, (err: Error | null, data: S3.ManagedUpload.SendData) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading file");
      }

      res.json({ fileUrl: data.Location });
    });
  }
);

export default apiRouter;