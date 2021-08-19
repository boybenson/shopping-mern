import React from "react";
import { useSelector } from "react-redux";
import CartComponent from "./cart-component";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cart-slice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <CartComponent cartItems={cartItems} handleClearCart={handleClearCart} />
  );
};

export default CartContainer;
