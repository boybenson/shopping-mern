import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/Carousel";
import CategoriesContainer from "../../components/categories/categories-container";

const HomeScreenComponent = () => {
  return (
    <div className="py-2">
      <Container>
        <CarouselComponent />
        <CategoriesContainer />
      </Container>
    </div>
  );
};

export default HomeScreenComponent;
