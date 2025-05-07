import React from 'react'
import { Card } from 'react-bootstrap';


const VideoCard = ({ videos }) => {
  console.log(videos);
  return (
    <>
      <Card style={{width : '100%', height : '100%'}}>
        <Card.Img style={{width: '100%', height : '63%'}} variant="top" src={videos.imageURL} />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h6>{videos.caption}</h6>{" "}
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default VideoCard