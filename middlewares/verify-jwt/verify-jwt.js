import jwt from "jsonwebtoken";
import userModel from "../../models/users/userModel.js";

export const VERIFY_JWT_TOKEN = async (req, res, next) => {
  const accessToken = req?.headers?.authorization?.split(" ")[1];

  if (!accessToken) {
    res.json({
      status: 401,
      message: "Invalid Access Token!",
    });
  } else {
    const decoded = jwt.verify(accessToken, process.env.JWT_TOKEN_KEY);
    if (decoded) {
      const user = await userModel.findOne(
        { _id: decoded.id },
        { password: 0 }
      );
      req.user = user;
      next();
    }
  }
};
