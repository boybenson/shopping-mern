import express from "express";
import { POST_CREATE_AN_ORDER } from "../../controllers/orders/order-controllers.js";
import { CHECK_PAYMENT_TYPE } from "../../middlewares/check-payment-type/check-payment-type.js";
import { VERIFY_JWT_TOKEN } from "../../middlewares/verify-jwt/verify-jwt.js";
const orderRoute = express.Router();

orderRoute.post(
  "/create-order",
  VERIFY_JWT_TOKEN,
  CHECK_PAYMENT_TYPE,
  POST_CREATE_AN_ORDER
);

export default orderRoute;
