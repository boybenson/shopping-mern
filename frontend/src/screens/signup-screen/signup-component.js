import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignupComponent = ({
  email,
  password,
  confirmPassword,
  phone,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onChangePhone,
}) => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="ybenson96@gmail.com"
              size="lg"
              onChange={onChangeEmail}
              defaultValue={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*****************"
              size="lg"
              onChange={onChangePassword}
              defaultValue={password}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*****************"
              size="lg"
              onChange={onChangeConfirmPassword}
              defaultValue={confirmPassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="0546949655"
              size="lg"
              onChange={onChangePhone}
              defaultValue={phone}
            />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            signup
          </Button>
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
