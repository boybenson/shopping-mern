import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

const SpecificCategoryComponent = ({ foods, handleAddToCart }) => {
  return (
    <>
      <NavLink to="/" className="my-2">
        <Button variant="outline-dark">Go Back</Button>
      </NavLink>
      <Row>
        {foods.map((food, index) => {
          return (
            <Col xs={12} sm={4} lg={3} className="py-2" key={index}>
              <Card key={index} className="p-2">
                <Image
                  variant="top"
                  src={food.image}
                  thumbnail
                  alt={`${food.name}.jgp`}
                />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Text>{food.shortDesc}</Card.Text>
                  <p className="fw-bold h5">GH₵ {food.price}</p>
                  <Button
                    variant="outline-dark"
                    onClick={() => handleAddToCart(food)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SpecificCategoryComponent;
