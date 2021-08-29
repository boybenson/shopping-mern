import dotenv from "dotenv";
dotenv.config();
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

  smsClient.messages.create({
    body: `Hello ${req?.user?.userName}, Kindly Waiting Patiently For Your Order, With ID: ${newOrder?._id}, Total Price: GH₵ ${newOrder?.totalPrice} at ${newOrder?.address}`,
    from: "+18084193653",
    to: `+233${req?.user?.phone?.slice(1)}`,
  });
  return;
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

export const GET_A_SPECIFIC_ORDER = async (req, res, next) => {
  const orderDetails = await orderModel
    .findOne({ _id: req?.params?.orderId })
    .populate("customer", { password: 0 });
  res.json({
    status: 200,
    orderDetails,
  });
};

export const ORDER_DELIVERED = async (req, res, next) => {
  const filter = { _id: req?.params?.orderId };
  const update = { isDelivered: true };
  const deliveredOrder = await orderModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  // .populate("customer", { password: 0 });

  res.json({
    status: 200,
    deliveredOrder,
  });
};
