import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { signin } from "../redux/auth/signin-slice";
import toast from "react-hot-toast";
import { signupError, userSignUpRequest } from "../redux/auth/signup-slice";
import { saveUserInfoToLocalStorage, setCookies } from "../helpers/auth";

const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { errorInfo } = useSelector((state) => state.signup);

  const authLogic = async ({ email, password, phone }, authType) => {
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
