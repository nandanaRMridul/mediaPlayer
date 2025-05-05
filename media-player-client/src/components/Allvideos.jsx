import React from 'react'
import { Card } from 'react-bootstrap';
import musicManage from "../assets/manage-music.jpg";

const Allvideos = () => {
  return (
    <>
      <h4>All Videos</h4>
      <div className="row">
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={musicManage} />
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <h6>Title</h6>{" "}
                <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}

export default Allvideos