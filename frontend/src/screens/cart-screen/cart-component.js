import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
  Form,
} from "react-bootstrap";

const CartComponent = ({
  cartItems,
  handleClearCart,
  handleRemoveFromCart,
  increaseQty,
  decreaseQty,
  handleGoBack,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} className="py-2">
            <Button onClick={handleClearCart} variant="outline-dark">
              <i className="fas fa-trash"> Clear cart </i>
            </Button>
            {cartItems.map((item, index) => {
              return (
                <Card className="py-2 my-2" key={index}>
                  <Row>
                    <Col sm={2} className="mt-2">
                      <Image src={item.image} fluid thumbnail />
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
          <Col md={4} className="py-2">
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
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicdeliveryType"
                    >
                      <Form.Label>Delivery Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="please enter accurate location"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Payment Method</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Payment Method</option>
                        <option value="1">Cash On Delivery</option>
                        <option value="2">Mobile Money</option>
                        <option value="3">
                          Bank Transfer (Not Available Now)
                        </option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-between">
                      <Button
                        type="submit"
                        className="btn-block"
                        disabled={cartItems.length === 0}
                        variant="dark"
                      >
                        <i class="fas fa-credit-card"> Checkout </i>
                      </Button>

                      <Button
                        className="btn-block"
                        variant="danger"
                        onClick={handleGoBack}
                      >
                        <i class="fas fa-arrow-left"> Go Back </i>
                      </Button>
                    </Form.Group>
                  </Form>
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
