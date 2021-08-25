import dotenv from "dotenv";
dotenv.config();
import twilio from "twilio";
import userModel from "../../models/users/userModel.js";
import { generateToken } from "../../helpers/generate-token.js";
const smsClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const maxAge = 3 * 24 * 60 * 60;

export const POST_SIGNUP_USER = async (req, res, next) => {
  const { userName, email, password, phone, fullName } = req.body;

  const isUser = await userModel.findOne({ email });
  if (!isUser) {
    const newUser = await userModel.create({
      userName,
      phone,
      email,
      password,
      userName: fullName,
    });
    const accessToken = generateToken(newUser._id, maxAge);

    res.json({
      userName: newUser.userName,
      userId: newUser._id,
      role: newUser.role,
      phone: newUser.phone,
      status: 201,
      accessToken,
    });

    smsClient.messages.create({
      body: `Hello ${newUser.userName} Welcome To Food Bus, Ghana's Number 1 Fast Food Delivery Service`,
      from: "+18084193653",
      to: `+233${newUser.phone.slice(1)}`,
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
