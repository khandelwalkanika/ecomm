import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class HeaderNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Net-Jewels-Price</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Button
            hidden={
              this.props.auth.isAuthenticated &&
              localStorage.userRole !== "admin"
                ? ""
                : "hidden"
            }
            variant="outline-success"
            onClick={() => {
              this.props.history.push("/cart");
            }}
          >
            Cart
          </Button>{" "}
          <Button
            variant="outline-danger"
            hidden={this.props.auth.isAuthenticated ? "" : "hidden"}
            onClick={this.onLogoutClick}
          >
            Logout
          </Button>{" "}
        </Navbar>
      </>
    );
  }
}
HeaderNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  logoutUser: logoutUser,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderNav));
