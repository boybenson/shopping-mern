import React from "react";
import { Button, Container, Form, Spinner, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TextField from "../../components/input-fields/TextField";

const SignupComponent = ({
  handleSubmit,
  values,
  errors,
  handleBlur,
  touched,
  handleChange,
}) => {
  const { status } = useSelector((state) => state.signup);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Form.Group className="mb-3">
                <TextField
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  onBlur={handleBlur}
                  touched={touched}
                  label="Email Address"
                  errors={errors}
                  values={values}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <TextField
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="****************"
                  onBlur={handleBlur}
                  touched={touched}
                  label="Password "
                  errors={errors}
                  values={values}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <TextField
                  onChange={handleChange}
                  type="tel"
                  name="phone"
                  placeholder="0546949655"
                  onBlur={handleBlur}
                  touched={touched}
                  label="Phone Number"
                  errors={errors}
                  values={values}
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
