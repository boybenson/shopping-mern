import jwt from "jsonwebtoken";

export const generateToken = (id, maxAge) => {
  const token = jwt.sign({ id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: maxAge,
  });
  return token;
};
