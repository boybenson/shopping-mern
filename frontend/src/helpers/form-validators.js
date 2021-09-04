import * as Yup from "yup";

export const signupFormValidate = () => {
  return Yup.object({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email is Required"),
    phone: Yup.string()
      .length(10, "Must Be Exactly 10 Numbers")
      .matches(/^[0]?\d{9}$/, "Not A Valid Phone Number")
      .required("Phone Number Is Required"),
    password: Yup.string()
      .min(6, "Must Be At Least 6 letters")
      .required("Password Is Required"),
  });
};

export const signiFormValidate = () => {
  return Yup.object({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email is Required"),
    password: Yup.string()
      .min(6, "Must Be At Least 6 letters")
      .required("Password Is Required"),
  });
};

export const checkoutFormValidate = () => {
  return Yup.object({
    address: Yup.string().required("Location is Required"),
    paymentMethod: Yup.string().required("Select Payment Method"),
  });
};
