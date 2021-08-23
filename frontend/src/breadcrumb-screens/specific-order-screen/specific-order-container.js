import React from "react";
import SpecificOrderComponent from "./specific-order-component";
import { Container } from "react-bootstrap";

const SpecificOrderContainer = ({ match, history }) => {
  const handleGoBack = () => history.goBack();

  return (
    <div>
      <Container>
        <SpecificOrderComponent handleGoBack={handleGoBack} />
      </Container>
    </div>
  );
};

export default SpecificOrderContainer;
