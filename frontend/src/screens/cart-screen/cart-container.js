import React from "react";
import { useSelector } from "react-redux";
import CartComponent from "./cart-component";
import { useDispatch } from "react-redux";
import {
  clearCart,
  increaseQty,
  removeFromCart,
  decreaseQty,
} from "../../redux/cart/cart-slice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQty = (item) => {
    dispatch(increaseQty(item));
  };

  const handleDecreaseQty = (item) => {
    dispatch(decreaseQty(item));
  };

  return (
    <CartComponent
      cartItems={cartItems}
      handleClearCart={handleClearCart}
      handleRemoveFromCart={handleRemoveFromCart}
      increaseQty={handleIncreaseQty}
      decreaseQty={handleDecreaseQty}
    />
  );
};

export default CartContainer;
