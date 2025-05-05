import React from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import Allvideos from "../components/Allvideos";
import Allcategories from "../components/Allcategories";

const Home = () => {
  return (
    <div>
      <div className="container my-3 d-flex justify-content-between">
        <Add />
        <Link to={"/history"}>Watch History</Link>
      </div>

      <div className="container-fluid row">
        <div className="col-lg-6">
          <Allvideos />
        </div>
        <div className="col-lg-6">
          <Allcategories />
        </div>
      </div>
    </div>
  );
};

export default Home;
