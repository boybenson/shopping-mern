import express from "express";
import {
  FETCH_ALL_USERS,
  UPDATE_USER_INFO,
} from "../../controllers/users/user-controllers.js";
import { VERIFY_JWT_TOKEN } from "../../middlewares/verify-jwt/verify-jwt.js";

const userRoute = express.Router();

userRoute.put("/updateUser", VERIFY_JWT_TOKEN, UPDATE_USER_INFO);
userRoute.get("/fetch-all-users", VERIFY_JWT_TOKEN, FETCH_ALL_USERS);

export default userRoute;
