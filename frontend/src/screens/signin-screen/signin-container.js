import React, { useState } from "react";
import SigninComponent from "./signin-component";

const SigninContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setEmail(e.target.value);

  return (
    <SigninComponent
      email={email}
      password={password}
      setPassword={setPassword}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default SigninContainer;
