import React, { Component } from "react";
import history from "../history";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
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
    </nav>
  );
};

export default withRouter(Navbar);
