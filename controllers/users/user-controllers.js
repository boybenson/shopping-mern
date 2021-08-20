import userModel from "../../models/users/userModel.js";

export const UPDATE_USER_INFO = async (req, res, next) => {
  try {
    const oldDetails = req.user;
    const filter = { _id: oldDetails._id };
    const update = { userName: "updated User" };
    const user = await userModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      message: "updated successfully",
      status: 200,
      user,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};

export const FETCH_ALL_USERS = async (req, res, next) => {
  try {
    const users = await userModel.find({});
    res.status(200).json({
      message: "success",
      status: 200,
      users,
    });
  } catch (error) {
    const err = new Error(error.message);
    err.message = error.message;
    err.status = 500;
    next(err);
  }
};
