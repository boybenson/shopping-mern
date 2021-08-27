import React, { useEffect, useState } from "react";
import SignupUi from "./signup-ui";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useAuth from "../../custom-hooks/useAuth";

const SignupContainer = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [authLogic] = useAuth();

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
    authLogic({ email, password, phone, fullName }, "SIGNUP");
  };

  return (
    <SignupUi
      email={email}
      password={password}
      fullName={fullName}
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
