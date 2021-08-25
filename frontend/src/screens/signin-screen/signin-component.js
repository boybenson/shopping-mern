import React from "react";
import { Button, Form, Spinner, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SigninComponent = ({ onChangeEmail, onChangePassword, handleSubmit }) => {
  const { status } = useSelector((state) => state.auth);
  return (
    <div className="p-4">
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="jumbotron">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                size="lg"
                onChange={onChangeEmail}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*****************"
                size="lg"
                onChange={onChangePassword}
                required
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
        </Col>
      </Row>
    </div>
  );
};

export default SigninComponent;
