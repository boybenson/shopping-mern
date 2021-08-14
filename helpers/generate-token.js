import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: "7h",
  });
  return token;
};
