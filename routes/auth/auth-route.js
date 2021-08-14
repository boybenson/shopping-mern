import express from "express";
import {
  POST_SIGNUP_USER,
  POST_SIGNIN_USER,
} from "../../controllers/auth/auth-controllers.js";
const authRoute = express.Router();

authRoute.post("/signup", POST_SIGNUP_USER);

authRoute.post("/signin", POST_SIGNIN_USER);

export default authRoute;
