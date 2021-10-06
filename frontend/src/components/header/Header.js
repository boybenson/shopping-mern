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
  const { userInfo } = useSelector((state) => state?.auth);
  const { cartItems } = useSelector((state) => state?.cart);

  const logout = (e) => {
    e.preventDefault();
    handleLogout();
    dispatch(signOut());
    history.push("/");
  };

  return (
    <header className="sticky-top">
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
              <h3>FoodBuz</h3>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {userInfo && userInfo.role === "customer" && (
                <NavDropdown title={<i className="far fa-user"> Account </i>}>
                  <LinkContainer to="/v1/user/profile/my-orders">
                    <NavDropdown.Item>My Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/v1/user/profile/update-information">
                    <NavDropdown.Item>Update Profile</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {userInfo && userInfo.role === "admin" && (
                <NavDropdown title={<i className="far fa-user"> DashBoard </i>}>
                  <LinkContainer to="/v1/user/profile/all-orders">
                    <NavDropdown.Item>All Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/v1/user/profile/update-information">
                    <NavDropdown.Item>Update Profile</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {!userInfo && (
                <LinkContainer to="/v1/auth/signup">
                  <Nav.Link>
                    <i className="fas fa-user-plus"> sign up </i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {!userInfo && (
                <LinkContainer to="/v1/auth/signin">
                  <Nav.Link>
                    <i className="fas fa-sign-in-alt"> sign in </i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {!userInfo && (
                <LinkContainer to="/v1/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-basket"> cart </i>{" "}
                    <span>{cartItems.length}</span>
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.role === "customer" && (
                <LinkContainer to="/v1/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-basket"> cart </i>{" "}
                    <span>{cartItems.length}</span>
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
