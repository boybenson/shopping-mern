import React, { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import SpecificOrderComponent from "./specific-order-component";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";
import {
  fetchSpecificOrder,
  fetchSpecificOrderRequest,
} from "../../redux/order/specific-order-slice";
import {
  deliverOrder,
  deliverOrderError,
  deliverOrderRequest,
} from "../../redux/order/deliver-order-slice";

const SpecificOrderContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { status, orderDetails } = useSelector((state) => state.specificOrder);
  const { status: deliverOrderStatus } = useSelector(
    (state) => state.deliverOrder
  );
  const { userInfo } = useSelector((state) => state.auth);
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

  const handleMarkAsDelivered = async (orderId) => {
    const res = await dispatch(deliverOrderRequest(orderId));
    const data = unwrapResult(res);
    if (data.status === 200) {
      dispatch(deliverOrder(data));
      history.goBack();
      toast.success("food delivered, hurray!!");
    } else {
      dispatch(deliverOrderError(data));
      toast.error(data?.message);
    }
  };

  return (
    <div>
      <Container>
        <Button onClick={handleGoBack} variant="outline-dark">
          <i className="fas fa-arrow-left"> Go Back </i>
        </Button>

        {status === "loading" && <Loader />}

        {status === "success" && (
          <SpecificOrderComponent
            order={orderDetails?.orderDetails}
            userInfo={userInfo}
            handleMarkAsDelivered={handleMarkAsDelivered}
            deliverOrderStatus={deliverOrderStatus}
          />
        )}
      </Container>
    </div>
  );
};

export default SpecificOrderContainer;
