import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import logger from "morgan";
import cors from "cors";
import apiRouter from "./routes/index.routes";
import mongoose from "mongoose";

// Load environment variables
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


// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "http://172.20.10.2:3000"], // Allowed origins
    credentials: true, // Allow cookies and authorization headers
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
