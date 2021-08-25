import React, { useEffect, useState } from "react";
import SigninComponent from "./signin-component";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SigninContainer = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
