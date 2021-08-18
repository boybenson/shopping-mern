import React, { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import SigninComponent from "./signin-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import {
  signin,
  signinError,
  userSignInRequest,
} from "../../redux/auth/signin-slice";
import { checkForAllInputs } from "../../helpers/signup";

const SigninContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, errorInfo } = useSelector((state) => state.auth);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const allInputs = checkForAllInputs(email, password);
      if (allInputs) {
        const res = await dispatch(userSignInRequest({ email, password }));
        const data = unwrapResult(res);
        if (data.status === 200) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              email: data.email,
              phone: data.phone,
              role: data.role,
              userId: data.userId,
              userName: data.userName,
              status: data.status,
            })
          );
          dispatch(signin(data));
          Cookies.set("accessToken", data.accessToken, { expires: 7 });
          toast.success("login successful");
          history.push("/");
        } else {
          dispatch(signinError(data));
          toast.error(errorInfo.message);
        }
      } else {
        toast.error("please fill all fields");
      }
    } catch (error) {
      dispatch(signinError({ message: error?.message, status: error?.status }));
      toast.error(errorInfo?.message);
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
