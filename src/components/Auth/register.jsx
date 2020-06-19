import React, { Component } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  //state = {};
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/listings");
    }
  }
  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <Container>
          <Row xs={1} md={2}>
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to home
            </Link>
            <h4>Register</h4>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <span className="red-text">{errors.name}</span>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={this.onChange}
                  value={this.state.name}
                  name="name"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <span className="red-text">{errors.email}</span>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.email}
                  name="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <span className="red-text">{errors.password}</span>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  name="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  name="password2"
                />
              </Form.Group>
              <Button variant="primary" className="r" type="submit">
                Sign-up
              </Button>{" "}
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}

//This allows us to call this.props.auth or this.props.errors within our Register component.
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));

// export default withRouter(Register);
