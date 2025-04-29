import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container text-dark py-4 d-flex mt-2 justify-content-between">
      <div className="w-50">
        <Navbar.Brand className="text-dark fw-bold">
          <Link
            className="text-dark"
            style={{ fontSize: "25px", textDecoration: "none" }}
            to={"/"}
          >
            <i className="fa-solid fa-play me-1" style={{ color: "white" }}></i>{" "}
            Media Player{" "}
          </Link>
        </Navbar.Brand>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam. <br />
          Aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <h6 style={{ fontSize: "25px" }}>Links</h6>
        <div className="d-flex flex-column">
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            Landing
          </Link>
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/home"}
          >
            Home
          </Link>
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/history"}
          >
            History
          </Link>
        </div>
      </div>
      <div>
        <h6 style={{ fontSize: "25px" }}>Guides</h6>
        <div className="d-flex flex-column">
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            React
          </Link>
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            React Router
          </Link>
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            React Bootstrap
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h6 style={{ fontSize: "25px" }}>Contact</h6>
        <div className="d-flex mb-2">
          <input
            type="email"
            className="form-control form-control-sm bg-white border-0 text-light"
            placeholder="Enter your Email here!"
          />
          <button className="btn btn-info btn-sm ms-2">
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: " #ffffff;" }}
            ></i>
          </button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <i class="fa-brands fa-twitter" style={{ color: " #ffffff;" }}></i>
          <i class="fa-brands fa-instagram" style={{ color: " #ffffff;" }}></i>
          <i class="fa-brands fa-facebook" style={{ color: " #ffffff;" }}></i>
          <i class="fa-brands fa-linkedin" style={{ color: " #ffffff;" }}></i>
          <i class="fa-brands fa-github" style={{ color: " #ffffff;" }}></i>
          <i class="fa-brands fa-phone" style={{ color: " #ffffff;" }}></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
