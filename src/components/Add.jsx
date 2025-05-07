import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoApi } from '../services/allApi';


const Add = () => {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageURL: "",
    youtubeLink: "",
  })

  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false)

  const addVideo = async() => {
    console.log(videoDetails);
    if (videoDetails.caption && videoDetails.imageURL && videoDetails.youtubeLink) {
       let result = await uploadVideoApi(videoDetails);
       console.log(result);
       if (result.status >= 200 && result.status <= 300) {
         alert("Successfully added your video");
         handleClose();
      }
       else {
         alert("Something went wrong. Please contact admin")
      }
       console.log(result);
    }
    else {
      alert("Please fill the form") //alerts if add button is clicked without filling form
    }
   
  }

  const convertToId = (videoURL) => {
    if (videoURL.includes(".be/")) {
      console.log(videoURL.includes(".be/"));
      let videoId = videoURL.slice(17, 28);
      setVideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoId}`,
      })
    }
    else {
      setInvalidYoutubeLink(true);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h4>Upload New Video</h4>
        <button
          onClick={handleShow}
          className="btn btn-warning rounded-circle fw-semibold ms-2"
        >
          +
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"35px"}}>Upload Your Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-4 m-2">
            <FloatingLabel
              controlId="floatingInputVideoCaption"
              label="Video Caption"
              className="mb-2 w-100"
            >
              <Form.Control onChange={(e)=>setVideoDetails({...videoDetails, caption : e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImageUrl"
              label="Video Image URL"
              className="mb-2 w-100"
            >
              <Form.Control onChange={(e)=>setVideoDetails({...videoDetails, imageURL: e.target.value})} type="text" placeholder="Video Image URL" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputYoutubeLink"
              label="Video YouTube Link"
              className="mb-2 w-100"
            >
              <Form.Control onChange={(e) => convertToId(e.target.value)} type="text" placeholder="Video YouTube Link" />
            </FloatingLabel>
            {invalidYoutubeLink?(<span className='text-danger fw-semibold'>Invalid Youtube Link</span>):("")}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={invalidYoutubeLink} onClick={addVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add