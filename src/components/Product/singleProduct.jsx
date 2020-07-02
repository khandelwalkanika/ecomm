import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Card,
  Table,
} from "react-bootstrap";
// import productList from "../Admin/productList";
// import { getOneProduct } from "./../../actions/productActions";
class SingleProduct extends Component {
  state = {};
  //pehle get kro with :id
  componentDidMount() {
    const productId = this.props.history.location.pathname.split("/")[2];
    this.props.getOneProduct(productId);
  }

  render() {
    const { singleProduct } = this.props;

    return (
      <>
        <Container>
          <Row>
            <Col sm={4}>
              <Card style={{ width: "70rem" }}>
                <Card.Header>
                  {" "}
                  <h1>{singleProduct.productName}</h1>
                </Card.Header>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>
                        <Card border="dark" style={{ width: "16rem" }}>
                          {" "}
                          <Image
                            className="listing-images"
                            thumbnail
                            src={singleProduct.imagePath}
                          />
                          <Card.Body>
                            {/* <Card.Title> oktitle</Card.Title> */}
                            <Card.Text>Price: ${singleProduct.price}</Card.Text>
                          </Card.Body>
                        </Card>
                      </td>
                      <td>
                        <p>
                          This heart shaped Ring can be customized according to
                          your needs. The diamonds are pure and certification
                          will come with this product.Its simply priceless!!
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Button
                variant="primary"
                onClick={() => {
                  this.props.history.push("/listings");
                }}
              >
                Show Listings
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

SingleProduct.propTypes = {
  getOneProduct: PropTypes.func.isRequired,
  singleProduct: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  console.log(" single product state", state);
  return {
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleProduct));
