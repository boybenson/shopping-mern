export const checkForAllInputs = (email, password, confirmPassword, phone) => {
  if (
    email === "" ||
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
