import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { foodsData } from "../../data/foods";
import SpecificCategoryComponent from "./specific-category-component";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/cart/cart-slice";
import { useSelector, useDispatch } from "react-redux";

const SpecificCategoryContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const data = foodsData.filter(
      (item) => item.category === location.search.slice(2)
    );
    setFoods(data);
  }, [location.search]);

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
        <SpecificCategoryComponent
          foods={foods}
          handleAddToCart={handleAddToCart}
        />
        ;
      </Container>
    </div>
  );
};

export default SpecificCategoryContainer;
