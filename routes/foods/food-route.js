import express from "express";
import {} from "../../controllers/foods/food-controllers.js";
const foodRoute = express.Router();

foodRoute.get("/category?=categoryName", POST_SIGNUP_USER);

foodRoute.post("/signin", POST_SIGNIN_USER);

export default foodRoute;
