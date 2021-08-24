import React from "react";
import { Alert, Card, ListGroup, Col, Row } from "react-bootstrap";
import { calcDate } from "../../helpers/date";

const SpecificOrderComponent = ({ order }) => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <Card className="my-2">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Order ID :{" "}
                </small>
                <small className="ml-4">{`${order._id}`}</small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Total Price :
                </small>{" "}
                <small>GH₵ {order?.totalPrice}</small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Payment Method :
                </small>{" "}
                <small>
                  {order?.paymentMethod === "cashOnDelivery"
                    ? "Cash On Delivery"
                    : "Mobile Money"}
                </small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Status :
                </small>
                <small>
                  <Alert variant={!order?.isDelivered ? "danger" : "success"}>
                    {!order?.isDelivered ? "Not Delivered" : "Delivered"}
                  </Alert>
                </small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Order Date :
                </small>{" "}
                <small>{calcDate(order?.orderDate)}</small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Customer :
                </small>{" "}
                <small>{order?.customer?.userName}</small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  phone :
                </small>{" "}
                <small>{order?.customer?.phone}</small>
              </ListGroup.Item>

              <ListGroup.Item className="mt-2">
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Address :
                </small>{" "}
                <small>{order?.address}</small>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <Card>
              <ListGroup.Item>
                <h3>Foods Ordered</h3>
                <hr />
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Food Name :
                </small>{" "}
                <small className="fw-bold" style={{ fontSize: "18px" }}>
                  Quantity
                </small>
              </ListGroup.Item>

              {order.foods.map((food, index) => {
                return (
                  <ListGroup.Item>
                    <small className="fw-bold" style={{ fontSize: "18px" }}>
                      {food.name} :
                    </small>{" "}
                    <small style={{ fontSize: "18px", marginLeft: "10px" }}>
                      {food?.qtyToBuy}
                    </small>
                  </ListGroup.Item>
                );
              })}
            </Card>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SpecificOrderComponent;
