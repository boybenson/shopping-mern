import mongoose from "mongoose";

let foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 15.0,
  },
  cookingDuration: {
    type: Number,
    required: true,
    default: 30,
  },
  image: {
    type: String,
    required: true,
  },
  qtyToBuy: {
    type: Number,
    default: 1,
  },
});

let foodModel = mongoose.model("food", foodSchema);

export default foodModel;
