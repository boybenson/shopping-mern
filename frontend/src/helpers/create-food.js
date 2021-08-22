export const checkForAllInputs = (name, price, categry, image) => {
  return name === "" || price === "" || categry === "" || image === ""
    ? false
    : true;
};
