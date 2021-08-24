import React from "react";
import { Alert, Card, ListGroup } from "react-bootstrap";
import { calcDate } from "../../helpers/date";

const SpecificOrderComponent = ({ order }) => {
  const date = new Date(order?.orderDate);
  return (
    <div>
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
    </div>
  );
};

export default SpecificOrderComponent;
