import React, { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import SigninComponent from "./signin-component";
import { useDispatch } from "react-redux";
import {
  signin,
  signinError,
  userSignInRequest,
} from "../../redux/auth/auth-slice";

const SigninContainer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(userSignInRequest({ email, password }));
      const data = unwrapResult(res);
      if (data.status === 200) {
        dispatch(signin(data));
      } else {
        dispatch(signinError(data));
      }
    } catch (error) {
      dispatch(signinError({ message: error.message, status: error.status }));
    }
  };

  return (
    <SigninComponent
      email={email}
      password={password}
      setPassword={setPassword}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default SigninContainer;
