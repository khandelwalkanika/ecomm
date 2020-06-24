import React, { Component } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { updateThisProduct } from "../../actions/productActions";

class UpdateRecord extends Component {
  state = {};
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const productId = this.props.history.location.pathname.split("/")[2];
    const newProduct = {
      productName: this.state.itemName,
      price: this.state.price,
      imagePath: this.state.imagePath,
      productType: this.state.itemType,
      numOfItems: 0,
    };
    this.props.updateThisProduct(newProduct, productId, this.props.history);
  };
  render() {
    return (
      <>
        <Card style={{ width: "40rem" }}>
          <Card.Body>
            <Card.Title>Update your Product</Card.Title>
            <Form onSubmit={this.onSubmit}>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={3}>
                  Item Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                    onChange={this.onChange}
                    value={this.state.itemName}
                    name="itemName"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPrice">
                <Form.Label column sm={3}>
                  Price
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="price in $"
                    onChange={this.onChange}
                    value={this.state.price}
                    name="price"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPath">
                <Form.Label column sm={3}>
                  Image Path
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="paste your image path"
                    onChange={this.onChange}
                    value={this.state.imagePath}
                    name="imagePath"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalItemType">
                <Form.Label column sm={3}>
                  Type
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="whats the type???"
                    onChange={this.onChange}
                    value={this.state.itemType}
                    name="itemType"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Update</Button>{" "}
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

UpdateRecord.propTypes = {
  updateThisProduct: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  productData: state.productData,
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, {
  updateThisProduct,
  logoutUser,
})(withRouter(UpdateRecord));
