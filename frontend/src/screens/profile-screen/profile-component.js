import React, { Suspense } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { NavLink, Switch } from "react-router-dom";
import ProtectedRoute from "../../routes/protected-routes";

const ProfileComponent = ({ location, Loader, breadCrumbRoutes, userInfo }) => {
  return (
    <div>
      <Container className="">
        <h1>MY Account Information</h1>
        <Breadcrumb>
          {breadCrumbRoutes.map((item, index) => {
            if (item?.role === "both" || item?.role === userInfo.role) {
              return (
                <Breadcrumb.Item
                  key={index}
                  linkAs={NavLink}
                  linkProps={{ to: item.url }}
                  active={item.url === location.pathname}
                >
                  {item.title ?? ""}
                </Breadcrumb.Item>
              );
            } else {
              return null;
            }
          })}
        </Breadcrumb>
        <hr />
        <Suspense fallback={<Loader />}>
          <Switch>
            {breadCrumbRoutes.map((item, index) => {
              return (
                <ProtectedRoute
                  path={item.url}
                  component={item.component}
                  key={index}
                />
              );
            })}
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
};

export default ProfileComponent;
