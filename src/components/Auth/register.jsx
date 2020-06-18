import React, { Component } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Register extends Component {
  state = {};
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
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault(); // prevents the page load on click on submit
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log("New User: ", newUser);
  };

  render() {
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
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={this.onChange}
                  value={this.state.name}
                  name="name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.email}
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  name="password"
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
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

export default withRouter(Register);
//export default Register;
