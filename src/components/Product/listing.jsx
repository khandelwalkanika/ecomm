import React, { Component } from "react";
import "./listing.css";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, Table, Image } from "react-bootstrap";
import { getProducts, onAddingToCart } from "../../actions/productActions";

class Listing extends Component {
  componentDidMount() {
    if (this.props.productData.length === 0) {
      this.props.getProducts();
    }
  }

  onAdding(id) {
    this.props.onAddingToCart(id);
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
                      <NavLink to={`./singleProduct/${list._id}`}>
                        <Image
                          className="listing-images"
                          thumbnail
                          src={list.imagePath}
                        />
                      </NavLink>
                      <Card.Body>
                        <Card.Title onClick={() => {}}>
                          {" "}
                          {list.productName}
                        </Card.Title>
                        <Card.Text>Price: ${list.price}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={this.onAdding.bind(this, list._id)}
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
                        src={list.imagePath}
                        // src={require(`../../assets/images/${list.imagePath}`)}
                      />
                      <Card.Body>
                        <Card.Title> {list.productName}</Card.Title>
                        <Card.Text>Price: ${list.price}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={this.onAdding.bind(this, list._id)}
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
  onAddingToCart: onAddingToCart,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Listing));
