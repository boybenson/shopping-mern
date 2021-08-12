import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { foodsData } from "../../data/foods";
import SpecificCategoryComponent from "./specific-category-component";

const SpecificCategoryContainer = ({ match }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const data = foodsData.filter(
      (item) => item.category === match.params.categoryName
    );
    setFoods(data);
  }, [match.params.categoryName]);

  return (
    <div>
      <Container>
        <SpecificCategoryComponent foods={foods} />;
      </Container>
    </div>
  );
};

export default SpecificCategoryContainer;
