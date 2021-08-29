import dotenv from "dotenv";
dotenv.config();
import userModel from "../../models/users/userModel.js";
import { generateToken } from "../../helpers/generate-token.js";

const maxAge = 3 * 24 * 60 * 60;

export const POST_SIGNUP_USER = async (req, res, next) => {
  const { email, password, phone } = req.body;

  const isUser = await userModel.findOne({ email });
  if (!isUser) {
    const newUser = await userModel.create({
      phone,
      email,
      password,
    });
    const accessToken = generateToken(newUser._id, maxAge);

    res.json({
      userId: newUser._id,
      role: newUser.role,
      phone: newUser.phone,
      status: 201,
      accessToken,
    });

    return;
  } else {
    const err = new Error();
    err.message = "email already exists";
    err.status = 409;
    next(err);
    return;
  }
};

export const POST_SIGNIN_USER = async (req, res, next) => {
  const { email, password } = req.body;
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

  res.status(200).json({
    userName: user.userName,
    email: user.email,
    userId: user._id,
    phone: user.phone,
    role: user.role,
    status: 200,
    accessToken,
  });
};
