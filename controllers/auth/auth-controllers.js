import userModel from "../../models/users/userModel.js";
import { generateToken } from "../../helpers/generate-token.js";

const maxAge = 3 * 24 * 60 * 60;

export const POST_SIGNUP_USER = async (req, res, next) => {
  const { userName, email, password, phone } = req.body;

  try {
    const isUser = await userModel.findOne({ email });
    if (!isUser) {
      const newUser = await userModel.create({
        userName,
        phone,
        email,
        password,
      });
      const accessToken = generateToken(newUser._id, maxAge);

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      });
      res.status(201).json({
        username: newUser.userName,
        userId: newUser._id,
        role: newUser.role,
        phone: newUser.phone,
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

export const POST_SIGNIN_USER = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isUser = await userModel.findOne({ email });

    if (!isUser) {
      const err = new Error();
      err.message = "incorrect email address";
      err.status = 404;
      next(err);
      return;
    }

    const user = await userModel.login(email, password);

    // checkout for incorrect password
    if (user.status === 403) {
      const err = new Error();
      err.message = "incorrect password";
      err.status = 403;
      next(err);
      return;
    }

    const accessToken = generateToken(user._id, maxAge);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({
      username: user.userName,
      email: user.email,
      userId: user._id,
      phone: user.phone,
      role: user.role,
    });
  } catch (error) {
    const err = new Error();
    err.message = error.message;
    err.status = 500;
    next(err);
    return;
  }
};
