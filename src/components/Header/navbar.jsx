import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";

class HeaderNav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Net-Jewels-Price</Navbar.Brand>
          <Button
            hidden={this.props.isAuth ? "" : "hidden"}
            variant="outline-success"
            onClick={() => {
              this.props.onClickCart(this.props);
              this.props.history.push("/cart");
            }}
          >
            Cart
          </Button>{" "}
        </Container>
      </Navbar>
    );
  }
}
export default withRouter(HeaderNav);
