import userModel from "../../models/users/userModel.js";
import bcrypt from "bcrypt";

export const UPDATE_USER_INFO = async (req, res, next) => {
  const { email, userName, phone, password } = req.body;
  const oldDetails = req.user;
  const filter = { _id: oldDetails._id };
  const update = { userName, email, phone };
  const user = await userModel.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    const updatedUser = await userModel.findOneAndUpdate(filter, update, {
      new: true,
      fields: { password: 0 },
    });

    res.status(200).json({
      message: "updated successfully",
      status: 200,
      updatedUser,
    });
  } else {
    res.json({
      message: "incorrect password",
      status: 403,
    });
  }
};

export const FETCH_ALL_USERS = async (req, res, next) => {
  const users = await userModel.find({}, { password: 0 });
  res.status(200).json({
    message: "success",
    status: 200,
    users,
  });
};
