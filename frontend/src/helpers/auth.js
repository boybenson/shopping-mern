import Cookies from "js-cookie";

export const saveUserInfoToLocalStorage = (data) => {
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      email: data.email,
      phone: data.phone,
      role: data.role,
      userId: data.userId,
      userName: data.userName,
      status: data.status,
    })
  );
};

export const setCookies = (data) => {
  Cookies.set("accessToken", data.accessToken, {
    expires: 7,
    secure: false,
    sameSite: "Strict",
  });
};
