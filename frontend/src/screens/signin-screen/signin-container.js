import React, { useEffect, useState } from "react";
import SigninUi from "./signin-ui";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useAuth from "../../custom-hooks/useAuth";

const SigninContainer = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const [authLogic] = useAuth();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    authLogic({ email, password }, "SIGNIN");
  };

  return (
    <SigninUi
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
