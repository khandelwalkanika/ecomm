import React, { Component } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { uploadProduct } from "../../actions/productActions";
class AdminDashboard extends Component {
  state = {};
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "imagePath") {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    // const file = document.getElementById("exampleFormControlFile1").files;

    const formData = new FormData();

    formData.append("imagePath", this.state.imagePath);
    formData.append("productName", this.state.itemName);
    formData.append("price", this.state.price);
    formData.append("productType", this.state.itemType);
    formData.append("numOfItems", 0);
    // console.log("formData", formData.get("photo"));
    // const newProduct = {
    //   productName: this.state.itemName,
    //   price: this.state.price,
    //   imagePath: file[0],
    //   productType: this.state.itemType,
    //   numOfItems: 0,
    // };
    // console.log("new product info:", newProduct);
    this.props.uploadProduct(formData, this.props.history);
  };
  render() {
    return (
      <>
        <Card style={{ width: "40rem" }}>
          <Card.Body>
            <Card.Title>Upload you Product</Card.Title>
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

              <Form.Group as={Row} controlId="formHorizontalItemType">
                <Form.Label column sm={3}>
                  Type
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="whats the type??"
                    onChange={this.onChange}
                    value={this.state.itemType}
                    name="itemType"
                  />
                </Col>
              </Form.Group>

              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  className="position-relative"
                  label="Upload image"
                  onChange={this.onChange}
                  name="imagePath"
                />
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Save</Button>{" "}
                  <Button
                    onClick={() => {
                      this.props.history.push("/productLists");
                    }}
                  >
                    See Your List
                  </Button>{" "}
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

AdminDashboard.propTypes = {
  uploadProduct: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  productData: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  productData: state.productData,
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { uploadProduct, logoutUser })(
  withRouter(AdminDashboard)
);
