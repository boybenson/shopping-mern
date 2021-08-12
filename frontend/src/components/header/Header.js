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
        className="py-2"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Kfc Fast Food</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* <LinkContainer to="/"> */}
              {/* <Nav.Link>Home</Nav.Link> */}
              {/* </LinkContainer> */}
              <LinkContainer to="/v1/user/signup">
                <Nav.Link>signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/v1/user/signin">
                <Nav.Link>signin</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/v1/cart">
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
