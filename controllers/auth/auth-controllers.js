import userModel from "../../models/users/userModel.js";
import { generateToken } from "../../helpers/generate-token.js";

export const POST_SIGNUP_USER = async (req, res, next) => {
  const { userName, email, password, phone } = req.body;

  try {
    //   checking if the email is in the database
    let isUser = await userModel.findOne({ email });
    if (!isUser) {
      const newUser = await userModel.create({
        userName,
        phone,
        email,
        password,
      });
      const accessToken = generateToken(newUser._id);
      res.status(200).json({
        username: newUser.userName,
        userId: newUser._id,
        role: newUser.role,
        phone: newUser.phone,
        accessToken,
      });
    } else {
      const err = new Error();
      err.message = "email already exists";
      err.status = 409;
      next(err);
      return;
    }
  } catch (error) {
    let err = new Error(error.message);
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};

export const POST_SIGNIN_USER = (req, res, next) => {
  try {
    res.json({ message: "This is the signin route" });
  } catch (error) {
    let err = new Error(error.message);
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};
