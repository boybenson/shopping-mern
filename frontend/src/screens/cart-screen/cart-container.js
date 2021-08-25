import React, { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
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
  const { status } = useSelector((state) => state.checkout);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = Number(
    cartItems
      .reduce((acc, item) => acc + item.qtyToBuy * item.price, 10)
      .toFixed(2)
  );

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

  const cartInfo = {
    deliveryFee: 10,
    address,
    paymentMethod,
    foods: cartItems,
    totalPrice,
  };

  const handlePayStackOnSuccess = async () => {
    const res = await dispatch(checkoutRequest(cartInfo));
    const data = unwrapResult(res);
    if (data.status === 201) {
      dispatch(checkout(data));
      localStorage.removeItem("cartItems");
      dispatch(clearCart());
      toast.success("congrats!, great meal awaits you!");
    } else {
      dispatch(checkoutError(data));
      toast.error("sorry an unexpected occur!");
    }
  };

  const payStackProps = {
    email: userInfo?.email,
    amount: totalPrice * 100,
    publicKey: "pk_test_1f8a48067da5793e978f1b1d07e1feea71c756f3",
    text: `Pay GH₵  ${cartItems.length === 0 ? "0" : totalPrice}`,
    currency: "GHS",
    channels: ["mobile_money"],
    onSuccess: (res) => handlePayStackOnSuccess(res),
    onClose: () => toast.error('wait!! You Need This Flow, Don"t Go!!!!!!'),
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!userInfo) {
      history.push("/v1/auth/signin");
      toast.error("please signin");
    } else {
      if (paymentMethod === "" || address === "") {
        toast.error("Select Payment Method And Enter Address");
      } else {
        const res = await dispatch(checkoutRequest(cartInfo));
        const data = unwrapResult(res);
        if (data.status === 201) {
          dispatch(checkout(data));
          localStorage.removeItem("cartItems");
          dispatch(clearCart());
          toast.success("congrats!, great meal awaits you!");
        } else {
          dispatch(checkoutError(data));
          toast.error("sorry an unexpected occur!");
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
      paymentMethod={paymentMethod}
      totalPrice={totalPrice}
      payStackProps={payStackProps}
      status={status}
    />
  );
};

export default CartContainer;
