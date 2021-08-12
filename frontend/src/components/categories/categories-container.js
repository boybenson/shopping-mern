import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { categoriesData } from "../../data/categories";
import CategoriesComponent from "./categories-component";

const CategoriesContainer = () => {
  return (
    <div className="py-2">
      <Container>
        <h3 className="py-2">Popular Categories</h3>
        <Row>
          {categoriesData.map((item, index) => {
            return (
              <Col xs={12} sm={4} lg={3} className="py-2">
                <CategoriesComponent
                  key={index}
                  name={item.name}
                  img={item.img}
                  shortDesc={item.shortDesc}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CategoriesContainer;
