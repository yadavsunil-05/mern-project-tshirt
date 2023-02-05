import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/user/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/dashboard">
              A. Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              SignIn
            </Nav.Link>
            <Nav.Link as={Link} to="/signout">
              SignOut
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
