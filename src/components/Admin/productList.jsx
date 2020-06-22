import React, { Component } from "react";
// get our fontawesome imports
import {
  faTrash,
  faPencilAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Table, Card } from "react-bootstrap";
class ProductLists extends Component {
  state = {};
  render() {
    return (
      <>
        <Card style={{ width: "70rem" }} className="text-center">
          <Card.Body>
            <Card.Title>Product Info</Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Path</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    <div>
                      <a href="#">
                        <FontAwesomeIcon icon={faTrash} />{" "}
                      </a>
                      <a href="./dashboard">
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </a>
                      <a href="./dashboard">
                        <FontAwesomeIcon icon={faPlus} />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ProductLists;
