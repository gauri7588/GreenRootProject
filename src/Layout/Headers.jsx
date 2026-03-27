import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <Navbar expand="md" fixed="top" className="py-3 bg-white shadow-sm">
      <Container fluid className="px-4">

        {/* Logo */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold text-success"
        >
          {/* change this line for pratic  */}
          🌱 Gauri Gade      
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            {/* Normal Nav Links */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link  as={Link}to="/contact" >
             Contact
            </Nav.Link>

            <Nav.Link as={Link} to="/learn">
              Learn
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>

            {/* Login Button */}
            <Button 
              as={Link} 
              to="/login" 
              variant="success" 
              className="ms-3 px-4"
            >
              Login
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Headers;
