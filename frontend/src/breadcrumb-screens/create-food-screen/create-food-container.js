import React, { useState } from "react";
import toast from "react-hot-toast";
import { unwrapResult } from "@reduxjs/toolkit";
import { checkForAllInputs } from "../../helpers/create-food";
import CreateFoodComponent from "./create-food-component";
import { useDispatch } from "react-redux";
import {
  createFood,
  createFoodError,
  createFoodRequest,
} from "../../redux/food/create-food-slice";

const CreateFoodContainer = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangePrice = (e) => setPrice(e.target.value);
  const onChangeCategory = (e) => setCategory(e.target.value);
  const onChangeImage = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const allInputs = checkForAllInputs(name, price, category, image);
      if (allInputs) {
        const foodInfo = new FormData();
        foodInfo.append("name", name);
        foodInfo.append("price", price);
        foodInfo.append("category", category);
        foodInfo.append("image", image);
        const res = await dispatch(createFoodRequest(foodInfo));
        const data = unwrapResult(res);
        if (data.status === 201) {
          dispatch(createFood(data.newFood));
          toast.success("food addedd successfully");
          setName("");
          setPrice("");
          setCategory("");
          setImage("");
        } else {
          dispatch(createFoodError(data));
          toast.error("Error Creating Food");
        }
      } else {
        toast.error("please fill all fields");
      }
    } catch (error) {
      dispatch(createFoodError(error?.message));
      toast.error(error?.message);
    }
  };

  return (
    <CreateFoodComponent
      onChangeName={onChangeName}
      onChangePrice={onChangePrice}
      onChangeCategory={onChangeCategory}
      onChangeImage={onChangeImage}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateFoodContainer;
