import React, { Component } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <Row xs={1} md={2}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}

export default LoginPage;
