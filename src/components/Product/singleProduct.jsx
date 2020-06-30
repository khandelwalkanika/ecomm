import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Image,
  Card,
  Table,
} from "react-bootstrap";
import productList from "../Admin/productList";
class SingleProduct extends Component {
  state = {};
  //pehle get kro with :id
  render() {
    return (
      <>
        {/* <Jumbotron> */}
        <Container>
          <Row>
            <Col sm={4}>
              <Card style={{ width: "70rem" }}>
                <Card.Header>
                  {" "}
                  <h1>Heart Shaped Diamond Ring</h1>
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
                            src={require(`../../assets/images/r1.jpg`)}
                          />
                          <Card.Body>
                            {/* <Card.Title> oktitle</Card.Title> */}
                            <Card.Text>Price: $</Card.Text>
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
        {/* </Jumbotron> */}
      </>
    );
  }
}

export default SingleProduct;
