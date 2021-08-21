import React, { useEffect, useState } from "react";
import { signupError, userSignUpRequest } from "../../redux/auth/signup-slice";
import { unwrapResult } from "@reduxjs/toolkit";
import SignupComponent from "./signup-component";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/auth/signin-slice";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { checkForAllInputs, checkIfPasswordsMatch } from "../../helpers/signup";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");

  const { errorInfo } = useSelector((state) => state.signup);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangeFullName = (e) => setFullName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const allInputs = checkForAllInputs(
        email,
        fullName,
        password,
        confirmPassword,
        phone
      );
      if (allInputs) {
        const passwordsMatch = checkIfPasswordsMatch(password, confirmPassword);
        if (passwordsMatch) {
          const res = await dispatch(
            userSignUpRequest({ email, fullName, password, phone })
          );
          const data = unwrapResult(res);
          if (data.status === 201) {
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
            Cookies.set("accessToken", data.accessToken, {
              expires: 7,
              secure: false,
              sameSite: "Strict",
            });
            toast.success("account created successfully");
            history.push("/");
          } else {
            dispatch(signupError(data));
            toast.error(errorInfo?.message);
          }
        } else {
          toast.error("sorry, passwords do not match");
        }
      } else {
        toast.error("please fill all fields");
      }
    } catch (error) {
      dispatch(signupError({ message: error?.message }));
      toast.error(errorInfo?.message);
    }
  };

  return (
    <SignupComponent
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      phone={phone}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      onChangePhone={onChangePhone}
      onChangeFullName={onChangeFullName}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
