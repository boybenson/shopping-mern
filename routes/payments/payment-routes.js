import express from "express";
import { VERIFY_TRANSACTIONS } from "../../controllers/payments/payment-controllers.js";
const paymentRoute = express.Router();

paymentRoute.get("/verify-transaction", VERIFY_TRANSACTIONS);

export default paymentRoute;
