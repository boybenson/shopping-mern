import React, { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import AllOrdersComponent from "./all-orders-component";
import {
  fetchAllOrders,
  fetchAllOrdersRequest,
} from "../../redux/order/all-orders-slice";

const AllOrdersContainers = () => {
  const { status, allOrders } = useSelector((state) => state.allOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    const apiReq = async () => {
      const res = await dispatch(fetchAllOrdersRequest());
      const data = unwrapResult(res);
      if (data.status === 200) {
        dispatch(fetchAllOrders(data));
      }
    };

    apiReq();
  }, [dispatch]);

  return (
    <div>
      <Container>
        {status === "success" && allOrders?.orders.length !== 0 && (
          <NavLink to="/">
            <Button variant="outline-dark" className="mb-2">
              <i className="fas fa-arrow-left"> Go Back </i>
            </Button>
          </NavLink>
        )}

        {status === "loading" && (
          <NavLink to="/">
            <Button variant="outline-dark" className="mb-2">
              <i className="fas fa-arrow-left"> Go Back </i>
            </Button>
          </NavLink>
        )}

        {status === "loading" && <Loader />}

        {status === "success" && (
          <AllOrdersComponent orders={allOrders?.orders} />
        )}
      </Container>
    </div>
  );
};

export default AllOrdersContainers;
