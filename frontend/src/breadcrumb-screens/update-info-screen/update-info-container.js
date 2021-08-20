import React from "react";
import UpdateInfoComponent from "./update-info-component";
import { useSelector } from "react-redux";

const UpdateInfoContainer = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <UpdateInfoComponent
      userEmail={userInfo?.email}
      userName={userInfo?.userName}
      userRole={userInfo?.role}
      userPhone={userInfo?.phone}
    />
  );
};

export default UpdateInfoContainer;
