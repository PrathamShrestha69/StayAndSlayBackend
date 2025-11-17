import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./lib/dbConnect.js";
import formRouter from "./routes/form.route.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin:"https://stay-and-slay.vercel.app",
  })
);

app.use(express.json());

app.use("/api", formRouter);

const PORT = process.env.PORT || 3000;

// Start after DB connects so routes can safely use the database
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  });
