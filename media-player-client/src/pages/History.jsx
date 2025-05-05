import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
Table

const History = () => {
  return (

      <div className='container'>
        <div className=" d-flex justify-content-between mt-3">
          <h4 className="">Watch History</h4>
          <Link to={"/home"}>Back to home</Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>TimeStamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
  );
}

export default History