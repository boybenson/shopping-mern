import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CartComponent = ({ cartItems }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            {cartItems.map((item) => {
              return (
                <Card className="py-2 my-2">
                  <Row>
                    <Col md={2}>
                      <Image src={item.img} fluid />
                    </Col>
                    <Col md={3}>
                      <NavLink to="/">{item.name}</NavLink>
                    </Col>
                    <Col md={2}>GH₵ {item.price}</Col>
                    <Col md={2}>
                      <Button variant="outline-dark">
                        <i className="fas fa-plus"></i>
                      </Button>{" "}
                      {item.price}{" "}
                      <Button variant="outline-dark">
                        <i className="fas fa-minus"></i>
                      </Button>
                    </Col>

                    <Col md={2}>
                      <Button variant="outline-dark">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartComponent;
