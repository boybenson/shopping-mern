import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UpdateInfoComponent = ({ userEmail, userName, userRole, userPhone }) => {
  return (
    <div>
      <Container className="mb-2">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicuserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              defaultValue={userName}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={userEmail}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>User Role</Form.Label>
            <Form.Control
              type="text"
              placeholder={userRole}
              value={userRole}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>User Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder={userPhone}
              defaultValue={userPhone}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="************" />
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-between">
            <Button variant="outline-dark" type="submit">
              Update Info
            </Button>
            <NavLink to="/">
              <Button variant="danger" type="submit">
                Go Back
              </Button>
            </NavLink>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateInfoComponent;
