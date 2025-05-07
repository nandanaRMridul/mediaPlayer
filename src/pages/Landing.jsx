import React from "react";
import { Link } from "react-router-dom";
import musicGif from "../assets/music-gif.gif";
import musicManage from "../assets/manage-music.jpg";
import musicCategory from "../assets/category.jpg";
import musicHistory from "../assets/history.jpg";
import { Card } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="container text-secondary">
      {/* welcome section */}
      <div className="row align-items-center mt-5">
        <div className="col-lg-4">
          <h3>
            Welcome to <span className="text-info">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }} className="mt-2 text-dark">
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link className="btn btn-outline-primary" to={"/home"}>
            Get Started
          </Link>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={musicGif}></img>
        </div>
      </div>
      {/* features section */}
      <div className="my-3">
        <h3 className="text-center">Features</h3>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={musicManage} />
              <Card.Body>
                <Card.Title>Manage Music</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={musicCategory} />
              <Card.Body>
                <Card.Title>Categorise Music</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={musicHistory} />
              <Card.Body>
                <Card.Title>Manage History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* info section */}
      <div className="row align-items-center mt-5 w-100 border rounded p-4">
        <div className="col-lg-5">
          <h3
            style={{ fontSize: "36px" }}
            className="text-info fw-medium mt-4 "
          >
            Simple, Fast and Powerful
          </h3>
          <p style={{ textAlign: "justify" }} className="text-dark">
            <span style={{ fontSize: "25px" }} className="fw-medium me-2">
              Play Everything
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <p style={{ textAlign: "justify" }} className="text-dark">
            <span style={{ fontSize: "25px" }} className="fw-medium me-2">
              Categorise Videos
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <p style={{ textAlign: "justify" }} className="text-dark">
            <span style={{ fontSize: "25px" }} className=" fw-medium me-2">
              Managing History
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <iframe
            style={{ width: "100%" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZnH_2I0WoFQ?si=ugt5XNaI5sVqzHds"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
