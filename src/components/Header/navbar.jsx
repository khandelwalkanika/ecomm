import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";
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
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Net-Jewels-Price</Navbar.Brand>
          <div className="col m12" style={{ paddingLeft: "790.250px" }}>
            <Button
              hidden={this.props.auth.isAuthenticated ? "" : "hidden"}
              variant="outline-success"
              onClick={() => {
                this.props.onClickCart(this.props);
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
          </div>
        </Container>
      </Navbar>
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
export default connect(mapStateToProps, { logoutUser })(withRouter(HeaderNav));
