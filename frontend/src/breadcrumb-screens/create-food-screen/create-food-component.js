import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateFoodComponent = ({
  onChangePrice,
  onChangeName,
  onChangeCategory,
  onChangeImage,
  handleSubmit,
}) => {
  const { status } = useSelector((state) => state?.createFood);
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Food Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Spicy Khebab"
              onChange={onChangeName}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price GH₵</Form.Label>
            <Form.Control
              type="Number"
              placeholder="45"
              onChange={onChangePrice}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Select
              onChange={onChangeCategory}
              aria-label="Default select example"
              required
            >
              <option>Select Category</option>
              <option value="pizza">PIZZA</option>
              <option value="khebab">KHEBAB</option>
              <option value="juice">Juice Drinks</option>
              <option value="burger">HamBurgers</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Food Image</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={onChangeImage}
            />
          </Form.Group>

          <Form.Group className="d-flex justify-content-between mb-3">
            {status === "loading" ? (
              <Button variant="outline-dark" disabled>
                <Spinner animation="border" /> processing...
              </Button>
            ) : (
              <Button variant="outline-dark" type="submit">
                Add New Food
              </Button>
            )}

            <NavLink to="/">
              <Button variant="danger">Go Back</Button>
            </NavLink>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default CreateFoodComponent;
