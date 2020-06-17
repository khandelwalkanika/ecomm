import React, { Component } from "react";
import history from "../history";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";

const HeaderNav = (props) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Net-Jewels-Price</Navbar.Brand>
        <Button
          variant="outline-success"
          onClick={() => {
            props.onClickCart(props);
            props.history.push("/cart");
          }}
        >
          Cart
        </Button>{" "}
      </Container>
    </Navbar>
  );
};

/**<nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Net-Jewels-Price
      </a>
      <button
        onClick={() => {
          props.onClickCart(props);
          props.history.push("/cart");
        }}
        className="btn btn-outline-success my-2 my-sm-0"
        type="button"
      >
        Cart
      </button>
    </nav> */
export default withRouter(HeaderNav);
