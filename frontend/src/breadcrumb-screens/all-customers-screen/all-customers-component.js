import React from "react";
import { Table } from "react-bootstrap";

const AllCustomersComponent = ({ customers }) => {
  return (
    <div>
      <h3>All {customers?.length} Account Holders</h3>
      <Table>
        <thead striped bordered hover responsive>
          <tr>
            <th>#</th>
            <th>user name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer?.userName}</td>
                <td>{customer?.email}</td>
                <td>{customer?.phone}</td>
                <td>{customer?.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllCustomersComponent;
