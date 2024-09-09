import express, { Request, Response } from "express";
import DishesRouter from "./Dishes.routes";
import ChefsRouter from "./Chefs.routes";
import RestaurantsRouter from "./Restaurants.routes";
import upload from "../multer-config";
import { S3 } from "aws-sdk";

const s3 = new S3();

const apiRouter = express.Router({
  strict: true,
});

apiRouter.use("/dishes", DishesRouter);
apiRouter.use("/chefs", ChefsRouter);
apiRouter.use("/restaurants", RestaurantsRouter);

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

    const params = {
      Bucket: bucketName,
      Key: file.originalname,
      Body: file.buffer,
    };

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