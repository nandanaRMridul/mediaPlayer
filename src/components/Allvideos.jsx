import React, { useState } from 'react'
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';
import { getVideoApi } from '../services/allApi';
import { useEffect } from 'react';

const Allvideos = () => {
const [videosData, setVideosData] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    let result = await getVideoApi() 
    if (result.status >= 200 && result.status <= 300) {
      setVideosData(result.data)
    }
    else {
      alert("Error fetching video data");
    }
    console.log(result);
  }

  return (
    <>
      <h4>All Videos</h4>
      <Row className='g-4'>
        {videosData?.map((eachVideos, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <VideoCard videos={eachVideos} />{" "}
            {/* sending videos as props (video) */}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Allvideos