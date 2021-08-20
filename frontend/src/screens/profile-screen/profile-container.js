import React from "react";
import ProfileComponent from "./profile-component";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { breadCrumbRoutes } from "../../routes/breadcrumb-view";

const ProfileContainer = ({ location }) => {
  const { userInfo } = useSelector((state) => state?.auth);

  return (
    <ProfileComponent
      location={location}
      Loader={Loader}
      breadCrumbRoutes={breadCrumbRoutes}
      userInfo={userInfo}
    />
  );
};

export default ProfileContainer;
