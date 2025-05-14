import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { addCategoryApi, getCategoryApi} from "../services/allApi";


const Allcategories = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState(" ");

  const addCategory = async() => { 
    const reqObj = {
      categoryName, videos:[]
    }

    let result = await addCategoryApi(reqObj);
    console.log(result);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex justify-content-around">
        <h4>All Categories</h4>
        <button
          style={{ width: "53.58px", height: "46.78px" }}
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
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "35px" }}>
            Add Category Details!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="m-2">
            <FloatingLabel
              controlId="floatingInputCategory"
              label="CategoryName"
              className="mb-2 w-100"
            >
              <Form.Control
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                placeholder="Category Name"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Allcategories;
