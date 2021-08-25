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
            <Form onSubmit={handleSubmit} autocomplete="off">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  onChange={onChangeEmail}
                  required
                />
                <label htmlFor="floatingInputCustom">Enter Email address</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="password"
                  placeholder="name@example.com"
                  onChange={onChangePassword}
                  required
                />
                <label htmlFor="floatingInputCustom">Enter Password</label>
              </Form.Floating>

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
