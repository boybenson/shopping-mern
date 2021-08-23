import React from "react";
import { Container } from "react-bootstrap";

const FavouritesDishesComponent = () => {
  return (
    <div>
      <Container className="text-center">
        <h3>My Favourite dishes</h3>

        <p className="py-4">
          Oops!, I'm Sorry This Feature Is Under Development, Click Any Of The
          Links Below To Contact The Developer.....lol
        </p>

        <div className="py-4 my-4">
          <a href="https://wa.me/233546949655">WhatsApp</a>{" "}
          <i className="fab fa-whatsapp"></i> ||{" "}
          <a href="mailto:ybenson96@gmail.com">Email</a>{" "}
          <i className="fas fa-envelope"></i> ||{" "}
          <a href="https://twitter.com/boybenson_">Twitter</a>{" "}
          <i className="fab fa-twitter"></i> ||{" "}
        </div>
      </Container>
    </div>
  );
};

export default FavouritesDishesComponent;
