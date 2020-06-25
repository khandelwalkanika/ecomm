import React, { Component } from "react";
import "./listing.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, Table, Image } from "react-bootstrap";
import { getProducts } from "../../actions/productActions";
//import myimagePath from "../../assets/images";
class Listing extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  onAdding(id, list) {
    console.log(
      "u clicked this id",
      id,
      " this.props.productData:",
      this.props.productData
    );
    const index = this.props.productData.findIndex(
      (item) => item._id === list._id
    );
    this.props.productData[index].numOfItems++;
  }
  render() {
    const { productData } = this.props;
    const rings = productData.filter(
      (product) => product.productType === "rings"
    );
    const necklaces = productData.filter(
      (product) => product.productType === "necklace"
    );

    return (
      <>
        <Card style={{ width: "70rem" }}>
          <Card.Header>Rings...</Card.Header>
          <Table responsive>
            <tbody>
              <tr>
                {rings.map((list, i) => (
                  <td>
                    <Card
                      border="dark"
                      style={{ width: "16rem" }}
                      key={list.id}
                    >
                      <Image
                        className="listing-images"
                        thumbnail
                        src={require(`../../assets/images/${list.imagePath}`)}
                      />
                      <Card.Body>
                        <Card.Title> {list.productName}</Card.Title>
                        <Card.Text>Price: ${list.price}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={this.onAdding.bind(this, list._id, list)}
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
                {necklaces.map((list, i) => (
                  <td>
                    <Card
                      border="dark"
                      style={{ width: "16rem" }}
                      key={list.id}
                    >
                      <Image
                        className="listing-images"
                        thumbnail
                        src={require(`../../assets/images/${list.imagePath}`)}
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
  getProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  productData: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  console.log(" MAP STP", state);
  return {
    auth: state.auth,
    productData: state.productData.productData,
    lists: state.lists,
  };
};
export default connect(mapStateToProps, {
  getProducts,
})(withRouter(Listing));
