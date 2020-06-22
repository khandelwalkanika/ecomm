import React, { Component } from "react";
import "./listing.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getProducts } from "../../actions/authActions";
import { Button, Card, Table, Image } from "react-bootstrap";
//import Lists from "./lists";
class Listing extends Component {
  componentDidMount() {
    console.log("Im in listings didmount", this.props.getProducts());
    this.props.getProducts();
  }

  render() {
    //for background color of the card bg="dark"
    return (
      <>
        <Card style={{ width: "70rem" }}>
          <Card.Header>Rings...</Card.Header>
          <Table responsive>
            <tbody>
              <tr>
                {this.props.rings.map((list, i) => (
                  <td>
                    <Card
                      border="dark"
                      style={{ width: "16rem" }}
                      key={list.id}
                    >
                      <Image
                        className="listing-images"
                        thumbnail
                        src={list.imgPath}
                      />
                      <Card.Body>
                        <Card.Title> {list.productName}</Card.Title>
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
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card style={{ width: "70rem" }}>
          <Card.Header>Necklaces...</Card.Header>
          <Table responsive>
            <tbody>
              <tr>
                {this.props.necklace.map((list, i) => (
                  <td>
                    <Card
                      style={{ width: "16rem" }}
                      border="dark"
                      key={list.id}
                    >
                      <Image
                        className="listing-images"
                        thumbnail
                        src={list.imgPath}
                      />
                      <Card.Body>
                        <Card.Title> {list.productName}</Card.Title>
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
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Card>
      </>
    );
  }
}

Listing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  lists: state.lists,
});
export default connect(mapStateToProps, { logoutUser, getProducts })(Listing);
