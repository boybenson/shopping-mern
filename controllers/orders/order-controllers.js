import orderModel from "../../models/orders/orderModel.js";

export const POST_CREATE_AN_ORDER = async (req, res, next) => {
  const { totalPrice, deliveryFee, address, foods, paymentMethod } = req.body;
  const newOrder = await orderModel.create({
    customer: req.user._id,
    foods,
    totalPrice,
    deliveryFee,
    address,
    paymentMethod,
  });

  res.json({
    status: 201,
    message: "order created successfully",
    newOrder,
  });
};

export const GET_FETCH_MY_ORDERS = async (req, res, next) => {
  const customerOrders = await orderModel
    .find({ customer: req.user._id })
    .populate("customer", { password: 0 });
  res.json({
    status: 200,
    customerOrders,
  });
};

export const GET_FETCH_ALL_ORDERS = async (req, res, next) => {
  const orders = await orderModel
    .find({})
    .populate("customer", { password: 0 });
  res.json({
    status: 200,
    orders,
  });
};
