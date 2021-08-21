export const checkForAllInputs = (
  email,
  fullName,
  password,
  confirmPassword,
  phone
) => {
  if (
    email === "" ||
    fullName === "" ||
    password === "" ||
    confirmPassword === "" ||
    phone === ""
  ) {
    return false;
  } else {
    return true;
  }
};

export const checkIfPasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword ? true : false;
};
