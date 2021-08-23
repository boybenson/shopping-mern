import React from "react";
import { Alert, Button, Table } from "react-bootstrap";

const MyOrderComponent = ({ customerOrders, handleGoBack }) => {
  return (
    <div>
      <h4>My Orders</h4>
      {customerOrders.length !== 0 && (
        <small>kindly scroll right for more info</small>
      )}

      {customerOrders.length === 0 ? (
        <Alert variant="info">
          <span className="mt-2">sorry! You Currently Have No Orders</span>
          <Button
            onClick={handleGoBack}
            className="mt-2"
            variant="outline-dark"
          >
            <i className="fas fa-arrow-left"> Go Back </i>
          </Button>
        </Alert>
      ) : (
        <Table className="mt-3" striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>GH₵</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customerOrders.map((order, index) => {
              return (
                <tr>
                  <td>{`${order._id.slice(4, 9)}...`}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order?.paymentMethod === "mobileMoney" ? "MoMo" : "COD"}
                  </td>
                  <td>
                    <Button variant="outline-dark" size="sm">
                      view More
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default MyOrderComponent;
