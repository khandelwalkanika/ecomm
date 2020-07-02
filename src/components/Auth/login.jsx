import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
// import { loginOfUser } from "../../sagas/authSaga";
// import { loginUser } from "../../sagas/authSaga";
import classnames from "classnames";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to product listings/admin dashboard

    if (this.props.auth.isAuthenticated) {
      if (localStorage.userRole === "admin") {
        this.props.history.push("/productLists");
      } else {
        this.props.history.push("/listings");
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      if (localStorage.userRole === "admin") {
        this.props.history.push("/productLists"); // if admin push to dashborad page
      } else {
        this.props.history.push("/listings"); // push user to listing page when they login
      }
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        userRole: nextProps.userRole,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginOfUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 3 }}>
              <h4>
                <b>Login</b> below
              </h4>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 3 }}>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                  <Form.Control
                    type="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    placeholder="Enter email"
                    name="email"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                  <Form.Control
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect,
                    })}
                  />
                </Form.Group>
                <Button variant="primary" className="r" type="submit">
                  Login
                </Button>{" "}
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
//This or use Selector both are conceptually same ,Allows you to extract data from the Redux store state.
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

// const mapDispatchToProps = {
//   loginUser: loginUser,
// };
const mapDispatchToProps = (dispatch) => ({
  loginOfUser: (userData) => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: userData,
    });
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
