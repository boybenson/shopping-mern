export const signupFormValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  if (!values.password) {
    errors.password = "Password Is Required";
  }

  if (!values.phone) {
    errors.phone = "Contact Is Required";
  }

  return errors;
};
