import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth/auth-route.js";
import foodRoute from "./routes/foods/food-route.js";
import connectDatabase from "./config/database.js";
import { handleError } from "./middlewares/error-handler/errorHandler.js";
import userRoute from "./routes/users/user-route.js";
import orderRoute from "./routes/orders/order-route.js";

const app = express();
const port = process.env.PORT || 8080;

const db = await connectDatabase();

if (db === true) {
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/foods", foodRoute);
  app.use("/api/v1/user", userRoute);
  ``;
  app.use("/api/v1/order", orderRoute);

  app.use(handleError);
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname + "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
} else {
  console.log(`database connection error : ${db}`);
}
