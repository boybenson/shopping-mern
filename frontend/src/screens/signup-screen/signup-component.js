import React from "react";
import { Button, Container, Form, Spinner, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SignupComponent = ({
  onChangeEmail,
  onChangePassword,
  onChangePhone,
  handleSubmit,
}) => {
  const { status } = useSelector((state) => state.signup);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@email.com"
                  size="lg"
                  onChange={onChangeEmail}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="***********"
                  size="lg"
                  onChange={onChangePassword}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="0546949655"
                  size="lg"
                  onChange={onChangePhone}
                  required
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupComponent;
