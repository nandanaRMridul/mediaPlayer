import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { addHistory } from "../services/allApi";
import { deleteVideoApi } from "../services/allApi";

const VideoCard = ({ videos, setDeleteVideoRes }) => {
  const [show, setShow] = useState(false);

  const deleteVideo = async (id) => {
    let result = await deleteVideoApi(id);
    setDeleteVideoRes(result);
  };

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const currentDate = new Date();
    const caption = videos.caption;
    const link = videos.youtubeLink;

    const reqObject = {
      //data sent to allHistory only when the video is opened in modal since it's defined in handleShow()
      currentDate,
      caption,
      link,
    };

    let result = await addHistory(reqObject);

    console.log(result);
    setShow(true);
  };

  console.log(videos);
  return (
    <>
      <Card
        style={{ width: "100%", height: "100%" }}
        className="rounded bg-info bg-opacity-25"
      >
        <Card.Img
          onClick={handleShow}
          style={{ width: "100%", height: "63%" }}
          variant="top"
          src={videos?.imageURL} //add optional chaining operator when accessing videos obj
        />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h6>{videos?.caption}</h6>{" "}
            <button onClick={() => deleteVideo(videos?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        size="lg"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="350"
            src={`${videos?.youtubeLink}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
