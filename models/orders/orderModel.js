import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  deliveryFee: {
    type: Number,
    default: 10.0,
  },

  address: {
    type: String,
    default: "accra",
  },

  foods: [{}],

  orderDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  isDelivered: {
    type: Boolean,
    default: false,
  },

  paymentMethod: {
    type: String,
    required: true,
  },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
