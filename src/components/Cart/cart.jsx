import React, { Component } from "react";
import {
  Button,
  Card,
  ListGroup,
  Form,
  Col,
  Container,
  Row,
} from "react-bootstrap";
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
                          {" "}
                          {list.type} {list.id}{" "}
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
          <Row>
            <Col sm>
              <Button variant="outline-success">
                Total Price :{getTotalPrice(this.props.cartData)}
              </Button>{" "}
              <Button
                variant="outline-primary"
                onClick={() => {
                  this.props.history.push("/listings");
                }}
              >
                Continue Shopping
              </Button>{" "}
            </Col>{" "}
          </Row>

          <Row>
            <Col sm={10}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" value="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

//export default withRouter(Cart);
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
