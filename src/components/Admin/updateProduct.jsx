import React, { Component } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import { getProducts } from "../../actions/productActions"; //updateThisProduct

class UpdateRecord extends Component {
  state = {};
  componentDidMount() {
    const productId = this.props.history.location.pathname.split("/")[2];
    this.props.getOneProduct(productId);
  }
  componentWillReceiveProps(props) {
    console.log("PROPS :::::", props);
    this.setState({
      itemName: props.singleProduct.productName,
      price: props.singleProduct.price,
      itemType: props.singleProduct.productType,
      imagePath: props.singleProduct.imagePath,
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "imagePath") {
      this.setState({ [e.target.name]: e.target.files[0] });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    const productId = this.props.history.location.pathname.split("/")[2];

    const formData = new FormData();

    formData.append("imagePath", this.state.imagePath);
    formData.append("productName", this.state.itemName);
    formData.append("price", this.state.price);
    formData.append("productType", this.state.itemType);
    formData.append("numOfItems", 0);
    this.props.updateThisProduct(formData, productId, this.props.history);
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
                    placeholder="whats the type???"
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
  getOneProduct: PropTypes.func.isRequired,
  singleProduct: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  let newProductData;
  if (state.adminCrud.productData.length == 0) {
    newProductData = state.productData.productData;
  } else {
    newProductData = state.adminCrud.productData;
  }
  console.log("STATE IN UPDATE ::::", state, "NEW PRODUCT:", newProductData);

  return {
    productData: state.productData,
    auth: state.auth,
    errors: state.errors,
    adminCrud: state.adminCrud,
    singleProduct: state.productData.singleProduct,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getOneProduct: (id) => {
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: id,
    });
  },
  updateThisProduct: (formData, productId, history) => {
    dispatch({
      type: "UPDATE_THIS_PRODUCT",
      payload: {
        formData,
        productId,
        history,
      },
    });
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpdateRecord));
