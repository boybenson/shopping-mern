import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const UpdateInfoComponent = ({
  userEmail,
  userName,
  userRole,
  userPhone,
  handleSubmit,
  onChangePhone,
  onChangeUserName,
  onChangeEmail,
  onChangePassword,
  password,
  handleGoBack,
}) => {
  const { status } = useSelector((state) => state.updateUser);

  return (
    <div>
      <Container className="mb-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicuserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              defaultValue={userName}
              onChange={onChangeUserName}
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
              onChange={onChangeEmail}
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
              onChange={onChangePhone}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="************"
              onChange={onChangePassword}
              defaultValue={password}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-between">
            {status === "loading" ? (
              <Button variant="outline-dark" disabled>
                <Spinner animation="border" /> processing...
              </Button>
            ) : (
              <Button variant="outline-dark" type="submit">
                Update User
              </Button>
            )}

            <Button variant="danger" onClick={handleGoBack}>
              <i className="fas fa-arrow-left"> Go Back </i>
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateInfoComponent;
