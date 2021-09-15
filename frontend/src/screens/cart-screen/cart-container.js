import React from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import CartComponent from "./cart-component";
import { useFormik } from "formik";
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
import { payStackProps } from "../../helpers/paystack";
import { checkoutFormValidate } from "../../helpers/form-validators";

const CartContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.checkout);

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

  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    useFormik({
      initialValues: {
        address: "",
        paymentMethod: "",
      },
      validationSchema: checkoutFormValidate,
      onSubmit: (data) => {},
    });

  const handleGoBack = () => history.goBack();

  const cartInfo = {
    deliveryFee: 10,
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

  return (
    <CartComponent
      cartItems={cartItems}
      handleClearCart={handleClearCart}
      handleRemoveFromCart={handleRemoveFromCart}
      increaseQty={handleIncreaseQty}
      decreaseQty={handleDecreaseQty}
      handleGoBack={handleGoBack}
      totalPrice={totalPrice}
      payStackProps={payStackProps(
        userInfo,
        cartItems,
        totalPrice,
        handlePayStackOnSuccess
      )}
      status={status}
      userInfo={userInfo}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      values={values}
      touched={touched}
    />
  );
};

export default CartContainer;
