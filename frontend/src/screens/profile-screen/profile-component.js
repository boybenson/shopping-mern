import React, { Suspense } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { NavLink, Route, Switch } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { breadCrumbRoutes } from "../../routes/breadcrumb-view";

const ProfileComponent = ({ location }) => {
  return (
    <div>
      <Container className="">
        <h1>MY Account Information</h1>
        <Breadcrumb>
          {breadCrumbRoutes.map((item, index) => {
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
          })}
        </Breadcrumb>
        <hr />
        <Suspense fallback={<Loader />}>
          <Switch>
            {breadCrumbRoutes.map((item, index) => {
              return <Route path={item.url} component={item.component} />;
            })}
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
};

export default ProfileComponent;
