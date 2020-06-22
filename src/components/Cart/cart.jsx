import React, { Component } from "react";
import { Button, Card, ListGroup, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import { withRouter } from "react-router-dom";
class Cart extends Component {
  componentDidUpdate() {
    console.log("--------<>", this.props);
  }

  state = {
    totalPrice: 0,
    cartData: [],
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col sm={10}>
              <Card style={{ width: "40rem" }}>
                <Card.Header>
                  You have {this.props.cartData.length} items in your cart!!
                </Card.Header>

                {this.props.cartData.map((list, i) => (
                  <ListGroup.Item>
                    <div className="div-style">
                      <div className="idiv-size" key={i}>
                        <img
                          src={list.imgPath}
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
                          onClick={() =>
                            this.props.onDelete(
                              list.id,
                              list.type,
                              this.props.cartData
                            )
                          }
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
              <Card.Title>
                Total amount : $ {getTotalPrice(this.props.cartData)}
              </Card.Title>
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
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(withRouter(Cart));

function getTotalPrice(cartData) {
  let totalPrice = 0;
  cartData.forEach((item) => {
    totalPrice = totalPrice + item.numOfItems * item.price;
  });
  return totalPrice;
}

// function deleteItem(cartData1) {
//   console.log("--kkk---->", cartData1);
//   const cartData = cartData1.filter((c) => c.id !== cartData1);
//   //this.props.cartData = { cartData };
// }
