import React, { Component } from "react";
import "./listing.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, Table, Image } from "react-bootstrap";
import { getProducts } from "../../actions/productActions";
import { onAddingToCart } from "../../actions/userActions";
//import myimagePath from "../../assets/images";
class Listing extends Component {
  // state = {
  //   productLocalData: [],
  // };
  componentDidMount() {
    if (this.props.productData.length === 0) {
      this.props.getProducts();
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log(" LISTING NEXT PROPS:", nextProps);
    // newList = nextProps.cart.map((item) => {
    //   let item2 = nextProps.productData.find(
    //     (i2) => i2.numOfItems === item.numOfItems
    //   );
    //   return item2 ? { ...item, ...item2 } : item;
    // });
    // console.log(newList, "<---new list");
    // let newList = nextProps.productData.map((item) => {
    //   const cartItemById = nextProps.cart.find((x) => x[item._id]);
    //   return cartItemById
    //     ? { ...item, numOfItems: cartItemById.numOfItems }
    //     : item;
    // });
    // this.setState({
    //   productLocalData: newList,
    // });
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
                      <Image
                        className="listing-images"
                        thumbnail
                        src={list.imagePath}
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
  onAddingToCart: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  productData: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  console.log(" MAP STP", state);
  return {
    auth: state.auth,
    productData: state.productData.productData,
    lists: state.lists,
    cart: state.productData.cart,
  };
};
export default connect(mapStateToProps, {
  getProducts,
  onAddingToCart,
})(withRouter(Listing));
