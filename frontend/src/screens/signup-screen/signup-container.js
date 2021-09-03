import React, { useEffect } from "react";
import SignupComponent from "./signup-component";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import useAuth from "../../custom-hooks/useAuth";
import { signupFormValidate } from "../../helpers/form-validators";

const SignupContainer = () => {
  const history = useHistory();
  const [authLogic] = useAuth();

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        phone: "",
      },
      validationSchema: signupFormValidate,
      onSubmit: (data) => {
        authLogic(data, "SIGNUP");
      },
    });

  const { userInfo } = useSelector((state) => state?.auth);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <SignupComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched}
    />
  );
};

export default SignupContainer;
