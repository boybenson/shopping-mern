import Cookies from "js-cookie";

export const handleLogout = () => {
  Cookies.remove("accessToken");
  localStorage.removeItem("userInfo");
};
