import React, { useState } from "react";
import { useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import CartComponent from "./cart-component";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  clearCart,
  increaseQty,
  removeFromCart,
  decreaseQty,
} from "../../redux/cart/cart-slice";
import {
  checkout,
  checkoutError,
  checkoutRequest,
} from "../../redux/checkout/checkout-slice";

const CartContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

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

  const handleGoBack = () => history.goBack();

  const onChangeAddress = (e) => setAddress(e.target.value);

  const onChangePaymentMethod = (e) => setPaymentMethod(e.target.value);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const cartInfo = {
      deliveryFee: 10,
      address,
      paymentMethod,
      foods: cartItems,
      totalPrice: Number(
        cartItems
          .reduce((acc, item) => acc + item.qtyToBuy * item.price, 10)
          .toFixed(2)
      ),
    };

    if (!userInfo) {
      history.push("/v1/auth/signin");
      toast.error("please signin");
    } else {
      if (paymentMethod === "") {
        toast.error("select payment method");
      } else {
        const res = await dispatch(checkoutRequest(cartInfo));
        const data = unwrapResult(res);
        if (data.status === 200) {
          dispatch(checkout(data));
          dispatch(clearCart());
          window.location = data?.data?.authorization_url;
        } else {
          dispatch(checkoutError(data));
        }
      }
    }
  };
  return (
    <CartComponent
      cartItems={cartItems}
      handleClearCart={handleClearCart}
      handleRemoveFromCart={handleRemoveFromCart}
      increaseQty={handleIncreaseQty}
      decreaseQty={handleDecreaseQty}
      handleCheckout={handleCheckout}
      handleGoBack={handleGoBack}
      onChangeAddress={onChangeAddress}
      onChangePaymentMethod={onChangePaymentMethod}
    />
  );
};

export default CartContainer;
