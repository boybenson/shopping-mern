import React, { useEffect } from "react";
import SigninComponent from "./signin-component";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import useAuth from "../../custom-hooks/useAuth";
import { signiFormValidate } from "../../helpers/form-validators";

const SigninContainer = () => {
  const history = useHistory();
  const [authLogic] = useAuth();

  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signiFormValidate,
      onSubmit: (data) => {
        authLogic(data, "SIGNIN");
      },
    });

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <SigninComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleBlur={handleBlur}
      errors={errors}
      values={values}
      touched={touched}
    />
  );
};

export default SigninContainer;
