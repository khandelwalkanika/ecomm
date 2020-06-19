import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
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
    // If logged in and user navigates to Login page, should redirect them to product listings
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/listings");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/listings"); // push user to listing page when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
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
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="col s12" style={{ paddingLeft: "70.250px" }}>
          <h4>
            <b>Login</b> below
          </h4>
        </div>
        <Container>
          <Row xs={1} md={2}>
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
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(LoginPage));
