import React, { Component } from "react";
// get our fontawesome imports
import {
  faTrash,
  faPencilAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getProducts, deleteThisProduct } from "../../actions/productActions";

class ProductLists extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  deleteProduct(id) {
    console.log("u clicked this id", id);
    this.props.deleteThisProduct(id);
  }
  render() {
    const { productData } = this.props;

    return (
      <>
        <Card style={{ width: "70rem" }} className="text-center">
          <Card.Body>
            <Card.Title>Product Info </Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Path</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.productType}</td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.imagePath}</td>
                    <td>
                      <div>
                        <a
                          href="#"
                          onClick={this.deleteProduct.bind(this, product._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />{" "}
                        </a>
                        <a href="./dashboard">
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </a>
                        <a href="./dashboard">
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </>
    );
  }
}

ProductLists.propTypes = {
  getProducts: PropTypes.func.isRequired,
  deleteThisProduct: PropTypes.func.isRequired,
  productData: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  productData: state.productData.productData,
});

export default connect(mapStateToProps, {
  getProducts,
  logoutUser,
  deleteThisProduct,
})(withRouter(ProductLists));
