import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import Allvideos from "../components/Allvideos";
import Allcategories from "../components/Allcategories";

const Home = () => {
  const [addVideoResponse, setAddVideoResponse] = useState([]);
console.log("reached",addVideoResponse);
  return (
    <div>
      <div className="container my-4 d-flex justify-content-between">
        <Add setAddVideoResponse={setAddVideoResponse} />
        <Link to={"/history"}>Watch History</Link>
      </div>

      <div className="container-fluid row">
        <div className="col-lg-6 mb-md-0 mb-sm-3">
          <Allvideos addVideoResponse={addVideoResponse} />
        </div>
        <div className="col-lg-6 mb-md-0 mb-sm-3">
          <Allcategories />
        </div>
      </div>
    </div>
  );
};

export default Home;
