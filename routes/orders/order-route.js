import express from "express";
import {
  GET_FETCH_ALL_ORDERS,
  GET_FETCH_MY_ORDERS,
  POST_CREATE_AN_ORDER,
} from "../../controllers/orders/order-controllers.js";
import { VERIFY_JWT_TOKEN } from "../../middlewares/verify-jwt/verify-jwt.js";
const orderRoute = express.Router();

orderRoute.post("/create-order", VERIFY_JWT_TOKEN, POST_CREATE_AN_ORDER);

orderRoute.get("/fetch-my-orders", VERIFY_JWT_TOKEN, GET_FETCH_MY_ORDERS);

orderRoute.get("/fetch-all-orders", VERIFY_JWT_TOKEN, GET_FETCH_ALL_ORDERS);

export default orderRoute;
