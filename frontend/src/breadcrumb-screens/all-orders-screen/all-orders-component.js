import React from "react";
import { Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AllOrdersComponent = ({ orders }) => {
  return (
    <div>
      <h4>All Orders</h4>
      <Table className="mt-2 text-center" striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Total Price GH₵</th>
            <th>Payment</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{`${order._id}`}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order?.paymentMethod === "mobileMoney" ? "MoMo" : "COD"}
                </td>
                <td
                  className={
                    !order?.isDelivered ? "text-danger" : "text-success"
                  }
                >
                  {!order?.isDelivered ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-check"></i>
                  )}
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
    </div>
  );
};

export default AllOrdersComponent;
