import axios from "axios";

export const CHECK_PAYMENT_TYPE = async (req, res, next) => {
  const { paymentMethod, totalPrice } = req.body;
  const customer = req.user;

  if (paymentMethod === "cashOnDelivery") {
    next();
  }

  if (paymentMethod === "mobileMoney") {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
    };

    const data = {
      email: customer.email,
      amount: totalPrice * 100,
      channels: ["mobile_money"],
      callback_url: "http://localhost:8080/api/v1/payment/verify-transaction",
    };

    const initializePayMentRes = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      data,
      {
        headers,
      }
    );

    if (initializePayMentRes?.status === 200) {
      res.json({
        status: 200,
        data: initializePayMentRes?.data?.data,
      });
    }
  }
};
