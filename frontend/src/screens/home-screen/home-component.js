import React from "react";
import { Container } from "react-bootstrap";
import CarouselComponent from "../../components/carousel/Carousel";

const HomeScreenComponent = () => {
  return (
    <div className="py-2">
      <Container>
        <CarouselComponent />
      </Container>
    </div>
  );
};

export default HomeScreenComponent;
