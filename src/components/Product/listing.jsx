import React, { Component } from "react";
import "./listing.css";
import { Button, Card } from "react-bootstrap";
//import Lists from "./lists";
class Listing extends Component {
  render() {
    return (
      <div>
        <div className="div-style">
          {this.props.rings.map((list, i) => (
            <Card style={{ width: "18rem" }} key={list.id}>
              <Card.Img variant="top" src={list.imgPath} />
              <Card.Body>
                <Card.Title> Ring {list.id}</Card.Title>
                <Card.Text>Price: ${list.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.props.onAdding(list)}
                >
                  Add to Cart
                </Button>
                <span className="badge badge-light">
                  {list.numOfItems === 0
                    ? " "
                    : "x" + list.numOfItems + " in Cart"}
                </span>
              </Card.Body>
            </Card>
          ))}
        </div>
        <hr />

        <div className="div-style">
          {this.props.necklace.map((list, i) => (
            <Card style={{ width: "18rem" }} key={list.id}>
              <Card.Img variant="top" src={list.imgPath} />
              <Card.Body>
                <Card.Title> Ring {list.id}</Card.Title>
                <Card.Text>Price: ${list.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.props.onAdding(list)}
                >
                  Add to Cart
                </Button>
                <span className="badge badge-light">
                  {list.numOfItems === 0
                    ? " "
                    : "x" + list.numOfItems + " in Cart"}
                </span>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Listing;