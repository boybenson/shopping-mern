import React, { useState } from "react";
import SignupComponent from "./signup-component";

const SignupContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState();

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

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
    />
  );
};

export default SignupContainer;
