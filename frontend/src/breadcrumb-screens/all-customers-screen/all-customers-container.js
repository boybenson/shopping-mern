import React, { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import AllCustomersComponent from "./all-customers-component";
import {
  fetchAllCustomers,
  fetchAllCustomersError,
  fetchAllCustomersRequest,
} from "../../redux/user/all-customers-slice";

const AllCustomerContainer = () => {
  const dispatch = useDispatch();
  const { allCustomers, status } = useSelector((state) => state.allCustomers);

  useEffect(() => {
    const apiReq = async () => {
      const res = await dispatch(fetchAllCustomersRequest());
      const data = unwrapResult(res);
      if (data.status === 200) {
        dispatch(fetchAllCustomers(data));
      } else {
        dispatch(fetchAllCustomersError(data));
        toast.error(data?.message);
      }
    };

    apiReq();
  }, [dispatch]);
  return (
    <div>
      <Container>
        {status === "success" && allCustomers?.users.length !== 0 && (
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
          <AllCustomersComponent customers={allCustomers?.users} />
        )}
      </Container>
    </div>
  );
};

export default AllCustomerContainer;
