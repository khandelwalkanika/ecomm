import React, { Component } from "react";
// get our fontawesome imports
import {
  faTrash,
  faPencilAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Card } from "react-bootstrap";
import { withRouter, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProducts } from "../../actions/productActions";
// import { deleteThisProduct } from "../../actions/adminActions";

class ProductLists extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  deleteProduct(id) {
    this.props.deleteThisProduct(id);
  }

  updateProduct(id) {
    this.props.history.push(`/updateProduct/${id}`);
  }
  render() {
    const { productData } = this.props;
    return (
      <>
        <Card style={{ width: "60rem" }}>
          <Card.Body>
            <Card.Header>
              WELCOME ADMIN!! Here's your Product List!!
            </Card.Header>
            <Card.Header>Product Info</Card.Header>
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
                          onClick={() => {
                            if (window.confirm("Delete the item?")) {
                              let deleteProduct = this.deleteProduct.bind(
                                this,
                                product._id
                              ); //bind will return to reference to binded function and not call it.
                              deleteProduct();
                            }
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />{" "}
                        </a>
                        <a
                          href="#"
                          onClick={this.updateProduct.bind(this, product._id)}
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </a>
                        <NavLink to="./dashboard">
                          <FontAwesomeIcon icon={faPlus} />
                        </NavLink>
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  let newProductData;
  if (state.adminCrud.productData.length == 0) {
    newProductData = state.productData.productData;
  } else {
    newProductData = state.adminCrud.productData;
  }
  return {
    productData: newProductData,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteThisProduct: (id) => {
    dispatch({
      type: "DELETE_ONE_PRODUCT",
      payload: id,
    });
  },
  getProducts: () => {
    dispatch({
      type: "GET_PRODUCT",
    });
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductLists));
