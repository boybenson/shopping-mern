import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center">
        <small>Fast Food ©</small> <small>{new Date().getFullYear()}</small>
      </Container>
    </footer>
  );
};

export default Footer;
