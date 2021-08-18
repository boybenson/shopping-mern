import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

const SignupComponent = ({
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onChangePhone,
  handleSubmit,
}) => {
  const { status } = useSelector((state) => state.signup);
  return (
    <div>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*****************"
              size="lg"
              onChange={onChangeConfirmPassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="0546949655"
              size="lg"
              onChange={onChangePhone}
            />
          </Form.Group>

          {status === "loading" ? (
            <Button variant="dark" disabled>
              <Spinner animation="border" />
            </Button>
          ) : (
            <Button variant="outline-dark" type="submit">
              signup
            </Button>
          )}
          <Form.Text className="text-muted h4 d-block py-2">
            Already have an account?{" "}
            <NavLink to="/v1/auth/signin" className="h6">
              signin
            </NavLink>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default SignupComponent;
