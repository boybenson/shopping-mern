import React from "react";
import { Button, Form, Spinner, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import TextField from "../../components/input-fields/TextField";

const SigninComponent = ({
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  values,
  touched,
}) => {
  const { status } = useSelector((state) => state.auth);
  return (
    <div className="p-4">
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
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
