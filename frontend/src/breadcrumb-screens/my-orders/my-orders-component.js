import React from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyOrderComponent = ({ customerOrders }) => {
  return (
    <div>
      <h4>My Orders</h4>
      {customerOrders.length === 0 ? (
        <Alert variant="info">
          <span className="mt-2">sorry! You Currently Have No Orders</span>{" "}
          <br></br>
          <NavLink to="/">
            <Button className="mt-2" variant="outline-dark">
              <i className="fas fa-pizza-slice"> Go Get Some Food </i>
            </Button>
          </NavLink>
        </Alert>
      ) : (
        <Table className="mt-2" striped bordered hover responsive>
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
                <tr key={index}>
                  <td>{`${order._id.slice(0, 5)}...`}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order?.paymentMethod === "mobileMoney" ? "MoMo" : "COD"}
                  </td>
                  <td>
                    <NavLink to={`/v1/user/profile/order/${order._id}`}>
                      <Button variant="outline-dark" size="sm">
                        Details
                      </Button>
                    </NavLink>
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
