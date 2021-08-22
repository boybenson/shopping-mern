import orderModel from "../../models/orders/orderModel.js";

export const POST_CREATE_AN_ORDER = async (req, res, next) => {
  const { totalPrice, deliveryFee, address, foods, paymentMethod } = req.body;
  try {
    const newOrder = await orderModel.create({
      customer: req.user._id,
      foods,
      totalPrice,
      deliveryFee,
      address,
      orderDate: Date.now(),
      paymentMethod,
    });

    res.json({
      status: 201,
      message: "order created successfully",
      newOrder,
    });
  } catch (error) {
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};
