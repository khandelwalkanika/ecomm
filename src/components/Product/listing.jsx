import React, { Component } from "react";
import "./listing.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, Table, Image } from "react-bootstrap";
import { getProducts } from "../../actions/productActions";
// import { onAddingToCart } from "../../actions/userActions";
//import myimagePath from "../../assets/images";
class Listing extends Component {
  // state = {
  //   productLocalData: [],
  // };
  componentDidMount() {
    // if (this.props.productData.length === 0) {
    this.props.getProducts();
  }
  render() {
    console.log(this.props, "<---props");
    const { productData } = this.props;
    const rings = productData.filter(
      (product) => product.productType === "rings"
    );
    const necklaces = productData.filter(
      (product) => product.productType === "necklace"
    );

    return (
      <>
        <h1>U R HERE</h1>
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
                        src={list.imagePath}
                      />
                      <Card.Body>
                        <Card.Title> {list.productName}</Card.Title>
                        <Card.Text>Price: ${list.price}</Card.Text>
                        {/* <Button
                          variant="primary"
                          onClick={this.onAdding.bind(this, list._id)}
                        >
                          Add to Cart
                        </Button> */}
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
                        src={list.imagePath}
                        // src={require(`../../assets/images/${list.imagePath}`)}
                      />
                      <Card.Body>
                        <Card.Title> {list.productName}</Card.Title>
                        <Card.Text>Price: ${list.price}</Card.Text>
                        {/* <Button
                          variant="primary"
                          onClick={this.onAdding.bind(this, list._id)}
                        >
                          Add to Cart
                        </Button> */}
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
  productData: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  console.log(" MAP STP", state);
  return {
    productData: state.productData.productData,
  };
};
const mapDispatchToProps = {
  getProducts: getProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Listing));
