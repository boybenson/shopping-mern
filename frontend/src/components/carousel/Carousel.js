import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { carouselData } from "../../data/carousel";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel fade interval={4000}>
        {carouselData.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                className="w-100 text-center"
                src={item.img}
                alt="slide photo"
                thumbnail
                fluid
              />
              <Carousel.Caption>
                <h2>{item.name}</h2>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
