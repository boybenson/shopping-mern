import mongoose from "mongoose";
import bcrypt from "bcrypt";

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "customer",
  },
});

// schema static method for login
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    } else {
      const err = new Error();
      err.message = "password is incorrect";
      err.status = 403;
      return err;
    }
  }
};

// Pre hook to hash password before saving
userSchema.pre("save", async function () {
  const saltRounds = 10;
  const hashPass = await bcrypt.hash(this.password, saltRounds);
  this.password = hashPass;
});

let userModel = mongoose.model("user", userSchema);

export default userModel;
