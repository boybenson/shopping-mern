import React from "react";
import { PaystackButton } from "react-paystack";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
  Form,
  Spinner,
} from "react-bootstrap";

const CartComponent = ({
  paymentMethod,
  cartItems,
  handleClearCart,
  handleRemoveFromCart,
  increaseQty,
  decreaseQty,
  handleCheckout,
  handleGoBack,
  onChangeAddress,
  onChangePaymentMethod,
  totalPrice,
  payStackProps,
  status,
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
                  {cartItems.length === 0 ? ` 0` : totalPrice}
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicdeliveryType"
                  >
                    <Form.Label>Delivery Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="please enter accurate location"
                      required
                      onChange={onChangeAddress}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Select onChange={onChangePaymentMethod}>
                      <option>Select Payment Method</option>
                      <option value="cashOnDelivery">Cash On Delivery</option>
                      <option value="mobileMoney">Mobile Money</option>
                      <option value="3" disabled>
                        Bank Transfer (Not Available Now)
                      </option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="d-flex justify-content-between">
                    {paymentMethod === "mobileMoney" ? (
                      <PaystackButton
                        {...payStackProps}
                        className="btn btn-dark"
                      />
                    ) : (
                      <Button
                        type="submit"
                        className="btn-block"
                        disabled={cartItems.length === 0}
                        variant="dark"
                        onClick={handleCheckout}
                      >
                        {status === "loading" ? (
                          <Spinner animation="border" />
                        ) : (
                          <i className="fas fa-credit-card"> Place Order </i>
                        )}
                      </Button>
                    )}

                    <Button
                      className="btn-block"
                      variant="danger"
                      onClick={handleGoBack}
                    >
                      <i className="fas fa-arrow-left"> Go Back </i>
                    </Button>
                  </Form.Group>
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
