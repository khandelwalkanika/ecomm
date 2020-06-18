import React, { Component } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";

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
    this.setState({ [e.target.id]: e.target.value });
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
            <h4>Register</h4>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  id="password2"
                />
              </Form.Group>
              <Button variant="primary" className="r" type="submit">
                Signup
              </Button>{" "}
              <Button variant="primary" type="submit">
                Register
              </Button>{" "}
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}

export default Register;
