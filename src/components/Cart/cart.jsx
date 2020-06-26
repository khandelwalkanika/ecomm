import React, { Component } from "react";
import { Button, Card, ListGroup, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  yourCart,
  onDeletingFromCart,
  setPrice,
} from "../../actions/productActions";
import { withRouter } from "react-router-dom";
class Cart extends Component {
  componentDidMount() {
    this.props.yourCart();
  }
  state = {
    totalPrice: 0,
  };
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, "PREV STATE");
  // }

  componentWillReceiveProps(nextProps) {
    let totalP = 0;
    totalP = nextProps.cart.map((item) => {
      return totalP + item.numOfItems * item.price;
    });

    console.log("NEXT PROPS:::", totalP);
    var TP = totalP.reduce(function (a, b) {
      return a + b;
    }, 0);
    this.setState({
      totalPrice: TP,
    });
    this.props.setPrice(TP);
  }

  onDelete(id) {
    this.props.onDeletingFromCart(id);
  }

  render() {
    const cart = this.props.cart;

    return (
      <>
        <Container>
          <Row>
            <Col sm={10}>
              <Card style={{ width: "40rem" }}>
                <Card.Header>
                  You have {cart.length} items in your cart!!
                </Card.Header>

                {cart.map((list, i) => (
                  <ListGroup.Item key={i}>
                    <div className="div-style">
                      <div className="idiv-size">
                        <img
                          src={require(`../../assets/images/${list.imagePath}`)}
                          alt={"boohoo"}
                          className="img-responsive "
                          style={{ height: "100px" }}
                          key={list.id}
                        />
                      </div>
                      <div className="idiv-size">
                        <span className="badge m-2 badge-warning">
                          {list.productName}{" "}
                        </span>

                        <span className="badge badge-pill badge-light">
                          {" "}
                          Quantity:
                          {list.numOfItems}
                        </span>
                        <span className="badge badge-pill badge-light">
                          {" "}
                          Price: $
                          {list.price +
                            "x" +
                            list.numOfItems +
                            ":" +
                            list.price * list.numOfItems}{" "}
                        </span>
                      </div>
                      <div className="idiv-size">
                        <button
                          onClick={this.onDelete.bind(this, list._id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </Card>
            </Col>
          </Row>

          <Card style={{ width: "40rem" }} className="text-center">
            <Card.Body>
              <Card.Title>Total amount : $ {this.state.totalPrice}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button
                variant="outline-dark"
                onClick={() => {
                  this.props.history.push("/checkout");
                  this.props.onCheckoutDelete();
                }}
              >
                Checkout
              </Button>{" "}
              <Button
                variant="outline-primary"
                onClick={() => {
                  this.props.history.push("/listings");
                }}
              >
                Continue Shopping
              </Button>
            </Card.Footer>
          </Card>
        </Container>
      </>
    );
  }
}

Cart.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  yourCart: PropTypes.func.isRequired,
  onDeletingFromCart: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  productData: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => {
  console.log("state in cart", state);
  return {
    auth: state.auth,
    productData: state.productData.productData,
    cart: state.productData.cart,
    totalPrice: state.totalPrice,
  };
};
export default connect(mapStateToProps, {
  logoutUser,
  yourCart,
  onDeletingFromCart,
  setPrice,
})(withRouter(Cart));

// function getTotalPrice(cartData) {
//   let totalPrice = 0;
//   cartData.forEach((item) => {
//     totalPrice = totalPrice + item.numOfItems * item.price;
//   });
//   return totalPrice;
// }

// function deleteItem(cartData1) {
//   console.log("--kkk---->", cartData1);
//   const cartData = cartData1.filter((c) => c.id !== cartData1);
//   //this.props.cartData = { cartData };
// }
