import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {
  signin,
  signinError,
  userSignInRequest,
} from "../redux/auth/signin-slice";
import toast from "react-hot-toast";
import { signupError, userSignUpRequest } from "../redux/auth/signup-slice";
import { saveUserInfoToLocalStorage, setCookies } from "../helpers/auth";

const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { errorInfo } = useSelector((state) => state.signup);

  const authLogic = async ({ email, password, phone }, authType) => {
    //   handles authentication with type of sign in
    if (authType === "SIGNIN") {
      const res = await dispatch(userSignInRequest({ email, password }));
      const data = unwrapResult(res);
      if (data.status === 200) {
        saveUserInfoToLocalStorage(data);
        dispatch(signin(data));
        setCookies(data);
        toast.success("login successful");
        history.push("/");
      } else {
        dispatch(signinError(data));
        toast.error("incorrect email or password");
      }
    }
    // Handle authentication with type of signup
    if (authType === "SIGNUP") {
      const res = await dispatch(userSignUpRequest({ email, password, phone }));
      const data = unwrapResult(res);
      if (data.status === 201) {
        saveUserInfoToLocalStorage(data);
        dispatch(signin(data));
        setCookies(data);
        toast.success("account created successfully");
        history.push("/");
      } else {
        dispatch(signupError(data));
        toast.error(errorInfo?.message);
      }
    }
  };

  return [authLogic];
};

export default useAuth;
