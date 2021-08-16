import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth/auth-route.js";
import foodRoute from "./routes/foods/food-route.js";
import connectDatabase from "./config/database.js";
import { handleError } from "./middlewares/error-handler/errorHandler.js";

const app = express();
const port = process.env.PORT;

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/foods", foodRoute);

app.use(handleError);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
