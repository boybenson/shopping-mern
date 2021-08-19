import React from "react";
import { useSelector } from "react-redux";
import CartComponent from "./cart-component";

const CartContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return <CartComponent cartItems={cartItems} />;
};

export default CartContainer;
