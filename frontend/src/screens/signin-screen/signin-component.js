import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SigninComponent = ({ onChangeEmail, onChangePassword, handleSubmit }) => {
  const { status } = useSelector((state) => state.auth);
  return (
    <div className="p-4">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="ybenson96@gmail.com"
              size="lg"
              onChange={onChangeEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*****************"
              size="lg"
              onChange={onChangePassword}
            />
          </Form.Group>

          {status === "loading" ? (
            <Button variant="dark" disabled>
              <Spinner animation="border" />
            </Button>
          ) : (
            <Button variant="outline-dark" type="submit">
              signin
            </Button>
          )}
          <Form.Text className="text-muted h4 d-block py-4">
            New Account ?{" "}
            <NavLink to="/v1/auth/signup" className="h6">
              signup
            </NavLink>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default SigninComponent;
