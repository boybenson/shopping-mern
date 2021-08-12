import React from "react";
import { Button, Card, Image } from "react-bootstrap";
const CategoriesComponent = ({ name, shortDesc, img }) => {
  return (
    <div>
      <Card className="p-2">
        <Image variant="top" src={img} thumbnail />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>{shortDesc}</Card.Text>
          <Button variant="outline-dark">View More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoriesComponent;
