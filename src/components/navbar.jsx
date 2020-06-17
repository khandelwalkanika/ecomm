import React, { Component } from "react";
// class Navbar extends Component {
//   state = {};
//   render() {

//   }
// } istead of cc try sfc

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Net-Jewels-Price
      </a>
      <button
        onClick={() => props.onClickCart(props)}
        className="btn btn-outline-success my-2 my-sm-0"
        type="button"
      >
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
