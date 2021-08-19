import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/cart/cart-slice";

const SpecificCategoryComponent = ({ foods }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleAddToCart = (food) => {
    if (cartItems.includes(food)) {
      toast.error("food already in cart");
    } else {
      dispatch(addToCart(food));
    }
  };
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
                <Image variant="top" src={food.img} thumbnail />
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
