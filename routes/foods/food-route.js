import express from "express";
import {
  GET_FETCH_A_SPECIFIC_CATEGORY_FOOD,
  POST_CREATE_A_FOOD,
} from "../../controllers/foods/food-controllers.js";
import { MULTER_UPLOAD } from "../../middlewares/file-upload/file-upload.js";
import { VERIFY_JWT_TOKEN } from "../../middlewares/verify-jwt/verify-jwt.js";
const foodRoute = express.Router();

foodRoute.get("/category/:categoryName", GET_FETCH_A_SPECIFIC_CATEGORY_FOOD);

foodRoute.post(
  "/create-food",
  VERIFY_JWT_TOKEN,
  MULTER_UPLOAD.single("image"),
  POST_CREATE_A_FOOD
);

export default foodRoute;
