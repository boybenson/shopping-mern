import React, { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import SpecificOrderComponent from "./specific-order-component";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/loader/Loader";
import {
  fetchSpecificOrder,
  fetchSpecificOrderRequest,
} from "../../redux/order/specific-order-slice";

const SpecificOrderContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { status, orderDetails } = useSelector((state) => state.specificOrder);
  const handleGoBack = () => history.goBack();

  useEffect(() => {
    const apiReq = async () => {
      const res = await dispatch(
        fetchSpecificOrderRequest(match?.params?.orderId)
      );
      const data = unwrapResult(res);
      if (data.status === 200) {
        dispatch(fetchSpecificOrder(data));
      }
    };

    apiReq();
  }, [match?.params?.orderId, dispatch]);

  return (
    <div>
      <Container>
        <Button onClick={handleGoBack} variant="outline-dark">
          <i className="fas fa-arrow-left"> Go Back </i>
        </Button>

        {status === "loading" && <Loader />}

        {status === "success" && (
          <SpecificOrderComponent order={orderDetails?.orderDetails} />
        )}
      </Container>
    </div>
  );
};

export default SpecificOrderContainer;
