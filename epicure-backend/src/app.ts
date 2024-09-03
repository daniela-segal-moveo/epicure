import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import logger from "morgan";
import cors from "cors";
import apiRouter from "./routes/index.routes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const httpServer = createServer(app);

const MONGO_URI = process.env.ATLAS_MONGO_URI || "";
const PORT = process.env.PORT || 3001;

async function initializeDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database initialization complete");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
  }
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || origin.startsWith('http://localhost:')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// Start the server
httpServer.listen(PORT, () => {
  console.log(`
    ################################################
    #  Server listening on port: ${PORT}
    ################################################
  `);

  initializeDatabase();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

export default app;
