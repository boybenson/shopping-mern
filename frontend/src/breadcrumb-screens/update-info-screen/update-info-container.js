import React, { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import UpdateInfoComponent from "./update-info-component";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { checkForPassword } from "../../helpers/update-info";
import Cookies from "js-cookie";
import {
  updateUser,
  updateUserError,
  updateUserRequest,
} from "../../redux/user/update-user-slice";
import { signin } from "../../redux/auth/signin-slice";

const UpdateInfoContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [email, setEmail] = useState(userInfo?.email);
  const [userName, setUserName] = useState(userInfo?.userName);
  const [phone, setPhone] = useState(userInfo?.phone);
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const handleGoBack = () => history.goBack();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const havePassword = checkForPassword(password);
      if (havePassword) {
        const accessToken = Cookies.get("accessToken");
        const res = await dispatch(
          updateUserRequest({ email, userName, phone, password, accessToken })
        );
        const data = unwrapResult(res);
        if (data.status === 200) {
          const newUserInfo = {
            email: data?.updatedUser?.email,
            phone: data?.updatedUser?.phone,
            role: data?.updatedUser?.role,
            userId: data?.updatedUser?._id,
            userName: data?.updatedUser?.userName,
            status: data?.status,
          };
          dispatch(updateUser(newUserInfo));
          toast.success("updated successfully");
          localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
          dispatch(signin(newUserInfo));
          setPassword("");
        } else {
          dispatch(updateUserError(data));
          toast.error(data?.message);
        }
      } else {
        toast.error("please enter your password");
      }
    } catch (error) {
      dispatch(updateUserError(error?.message));
      toast.error(error?.message);
    }
  };

  return (
    <UpdateInfoComponent
      userEmail={userInfo?.email}
      userName={userInfo?.userName}
      userRole={userInfo?.role}
      userPhone={userInfo?.phone}
      handleSubmit={handleSubmit}
      onChangePhone={onChangePhone}
      onChangeUserName={onChangeUserName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      password={password}
      handleGoBack={handleGoBack}
    />
  );
};

export default UpdateInfoContainer;
