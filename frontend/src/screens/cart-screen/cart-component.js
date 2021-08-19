import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const CartComponent = ({ cartItems, handleClearCart }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Button onClick={handleClearCart}>Clear Cart</Button>
            {cartItems.map((item) => {
              return (
                <Card className="py-2 my-2">
                  <Row>
                    <Col sm={2} className="mt-2">
                      <Image src={item.img} fluid thumbnail />
                    </Col>
                    <Col sm={3} className="mt-2">
                      <Card.Title>{item.name}</Card.Title>
                    </Col>
                    <Col sm={2} className="mt-2">
                      Price: GH₵ <strong>{item.price}</strong>
                    </Col>
                    <Col sm={2} className="mt-2">
                      <Button variant="outline-dark">
                        <i className="fas fa-plus"></i>
                      </Button>{" "}
                      {item.price}{" "}
                      <Button variant="outline-dark">
                        <i className="fas fa-minus"></i>
                      </Button>
                    </Col>

                    <Col xs={2} className="mt-2">
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
