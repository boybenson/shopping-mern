import React, { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SpecificCategoryComponent from "./specific-category-component";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/cart/cart-slice";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSPecificCategoryFoods,
  fetchSPecificCategoryFoodsRequest,
} from "../../redux/food/specific-category-slice";
import Loader from "../../components/loader/Loader";

const SpecificCategoryContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { foods, status } = useSelector((state) => state.specificCategory);

  useEffect(() => {
    const categoryName = location.search.slice(2);
    const apiReq = async () => {
      const res = await dispatch(
        fetchSPecificCategoryFoodsRequest(categoryName.toLowerCase())
      );
      const data = unwrapResult(res);
      if (data.message === "success") {
        dispatch(fetchSPecificCategoryFoods(data.foods));
      } else {
      }
    };
    apiReq();
  }, [dispatch, location.search]);

  const handleAddToCart = (food) => {
    const isInCart = cartItems.some((item) => item._id === food._id);
    if (!isInCart) {
      dispatch(addToCart(food));
      toast.success("food added to cart");
    } else {
      toast.error("food already in cart");
    }
  };

  return (
    <div>
      <Container>
        <NavLink to="/" className="my-2">
          <Button variant="outline-dark">
            {" "}
            <i className="fas fa-arrow-left"> Go Back </i>
          </Button>
        </NavLink>
        {status === "loading" && <Loader />}

        {status === "success" && (
          <SpecificCategoryComponent
            foods={foods}
            handleAddToCart={handleAddToCart}
          />
        )}
      </Container>
    </div>
  );
};

export default SpecificCategoryContainer;
