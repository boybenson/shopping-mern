import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-2 py-2"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand><h3>Kfc Fast Food</h3></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/v1/user/signup" className="h5">
                <Nav.Link>signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/v1/user/signin" className="h5">
                <Nav.Link>signin</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/v1/cart" className="h5">
                <Nav.Link>cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
