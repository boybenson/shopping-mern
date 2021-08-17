import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { handleLogout } from "../../helpers/logout";
import { signOut } from "../../redux/auth/signin-slice";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const logout = (e) => {
    e.preventDefault();
    handleLogout();
    dispatch(signOut());
    history.push("/");
  };

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
            <Navbar.Brand>
              <h3>Kfc Fast Food</h3>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {userInfo && (
                <LinkContainer to="/">
                  <Nav.Link>
                    Hello, {userInfo?.userName.split(" ")[1]}{" "}
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && (
                <NavDropdown
                  title={<i className="far fa-user"> My Profile </i>}
                >
                  <NavDropdown.Item eventKey="4.1">My Orders</NavDropdown.Item>
                  <NavDropdown.Item>Update Information</NavDropdown.Item>
                </NavDropdown>
              )}

              {!userInfo && (
                <LinkContainer to="/v1/auth/signup">
                  <Nav.Link>signup</Nav.Link>
                </LinkContainer>
              )}

              {!userInfo && (
                <LinkContainer to="/v1/auth/signin">
                  <Nav.Link>signin</Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.role === "customer" && (
                <LinkContainer to="/v1/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-basket"> cart </i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && (
                <div onClick={logout}>
                  <Nav.Link>
                    <i className="fas fa-sign-out-alt"> Logout </i>
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
