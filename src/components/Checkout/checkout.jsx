import React, { Component } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import { placeOrder } from "../../actions/authActions";
import classnames from "classnames";

import { withRouter } from "react-router-dom";
class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      address: "",
      orderNumber: "",
      totalPrice: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email: this.state.email,
      orderNumber: "101",
      totalPrice: "1000",
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    console.log("Info entered:", userInfo);
    this.props.placeOrder(userInfo, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col sm={10}>
              <Form noValidate onSubmit={this.onSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={this.onChange}
                      value={this.state.email}
                      name="email"
                      className={classnames("", {
                        invalid: errors.email,
                      })}
                    />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      name="password"
                      placeholder="Password"
                    />
                  </Form.Group> */}
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    onChange={this.onChange}
                    value={this.state.address}
                    placeholder="1234 Main St"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={this.onChange}
                    value={this.state.address2}
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={this.onChange}
                      value={this.state.city}
                      name="city"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      onChange={this.state.state}
                      value={this.state.state}
                    >
                      <option>Karnataka</option>
                      <option>kerala</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      name="zip"
                      onChange={this.state.zip}
                      value={this.state.zip}
                    />
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Checkout
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Checkout.propTypes = {
  placeOrder: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser, placeOrder })(
  withRouter(Checkout)
);
