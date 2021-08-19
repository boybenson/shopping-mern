import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";

const CartComponent = ({
  cartItems,
  handleClearCart,
  handleRemoveFromCart,
  increaseQty,
  decreaseQty,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Button onClick={handleClearCart} variant="outline-dark">
              <i className="fas fa-trash"> Clear cart </i>
            </Button>
            {cartItems.map((item, index) => {
              return (
                <Card className="py-2 my-2" key={index}>
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
                      <Button
                        variant="outline-dark"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fas fa-minus"></i>
                      </Button>{" "}
                      {item.qtyToBuy}{" "}
                      <Button
                        variant="outline-dark"
                        onClick={() => increaseQty(item)}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </Col>

                    <Col xs={2} className="mt-2">
                      <Button
                        variant="outline-dark"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{cartItems.length} Food(s) In Cart</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Delivery Fee : </strong>{" "}
                  {cartItems.length === 0 ? `GH₵ 0` : `GH₵ 10`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Total Price : </strong>GH₵{" "}
                  {cartItems.length === 0
                    ? ` 0`
                    : cartItems
                        .reduce(
                          (acc, item) => acc + item.qtyToBuy * item.price,
                          10
                        )
                        .toFixed(2)}
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    variant="dark"
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartComponent;
