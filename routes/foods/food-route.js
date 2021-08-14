import express from "express";
import {
  GET_FETCH_A_SPECIFIC_CATEGORY_FOOD,
  POST_CREATE_A_FOOD,
} from "../../controllers/foods/food-controllers.js";
const foodRoute = express.Router();

foodRoute.get("/category/:categoryName", GET_FETCH_A_SPECIFIC_CATEGORY_FOOD);

foodRoute.post("/create-food", POST_CREATE_A_FOOD);

export default foodRoute;
