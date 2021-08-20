import React, { Suspense } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { NavLink, Route, Switch } from "react-router-dom";

const ProfileComponent = ({ location, Loader, breadCrumbRoutes, userInfo }) => {
  return (
    <div>
      <Container className="">
        <h1>MY Account Information</h1>
        <Breadcrumb>
          {breadCrumbRoutes.map((item, index) => {
            if (item.role === "both") {
              return (
                <Breadcrumb.Item
                  key={index}
                  linkAs={NavLink}
                  linkProps={{ to: item.url }}
                  active={item.url === location.pathname}
                >
                  {item.title}
                </Breadcrumb.Item>
              );
            } else if (item.role === "customer") {
              return (
                <Breadcrumb.Item
                  key={index}
                  linkAs={NavLink}
                  linkProps={{ to: item.url }}
                  active={item.url === location.pathname}
                >
                  {item.title}
                </Breadcrumb.Item>
              );
            } else {
              return (
                <Breadcrumb.Item
                  key={index}
                  linkAs={NavLink}
                  linkProps={{ to: item.url }}
                  active={item.url === location.pathname}
                >
                  {item.title}
                </Breadcrumb.Item>
              );
            }
          })}
        </Breadcrumb>
        <hr />
        <Suspense fallback={<Loader />}>
          <Switch>
            {breadCrumbRoutes.map((item, index) => {
              return (
                <Route path={item.url} component={item.component} key={index} />
              );
            })}
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
};

export default ProfileComponent;
