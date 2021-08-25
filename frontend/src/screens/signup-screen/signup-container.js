import React, { useEffect, useState } from "react";
import SignupComponent from "./signup-component";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const SignupContainer = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <SignupComponent
      email={email}
      password={password}
      phone={phone}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePhone={onChangePhone}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
