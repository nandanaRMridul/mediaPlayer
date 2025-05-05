import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar
      className="bg-primary sticky-top w-100 "
      style={{ zIndex: 1, height: "70px" }}
    >
      <Container>
        <Navbar.Brand className="text-dark fw-bold">
          <Link
            className="text-light"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            <i className="fa-solid fa-play me-1" style={{ color: "black" }}></i>{" "}
            Media Player{" "}
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header