import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from "react-bootstrap";
const CategoriesComponent = ({ name, shortDesc, img, category, key }) => {
  return (
    <div key={key}>
      <Card className="p-2">
        <Image variant="top" src={img} thumbnail fluid />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>{shortDesc}</Card.Text>
          <NavLink to={`/v1/category?=${category}`}>
            <Button variant="outline-dark">View More</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoriesComponent;
