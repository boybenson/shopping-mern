import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { foodsData } from "../../data/foods";
import SpecificCategoryComponent from "./specific-category-component";

const SpecificCategoryContainer = ({ location }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const data = foodsData.filter(
      (item) => item.category === location.search.slice(2)
    );
    setFoods(data);
  }, [location.search]);

  return (
    <div>
      <Container>
        <SpecificCategoryComponent foods={foods} />;
      </Container>
    </div>
  );
};

export default SpecificCategoryContainer;
