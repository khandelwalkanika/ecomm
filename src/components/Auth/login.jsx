import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  // componentDidMount() {
  //   if (this.state.isAuthenticated) {
  //     console.log("State kya h yahan--->".this.state.isAuthenticated);
  //     this.props.history.push("/listings"); // push user to dashboard when they login
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    // if (this.state.isAuthenticated) {
    //   this.props.history.push("/listings"); // push user to dashboard when they login
    // }
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
    e.preventDefault(); // prevents the page load on click on submit

    // creates entity
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.success) {
          this.props.isAuth();
          this.props.history.push("/listings");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // const userData = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    // console.log("User Data : ", userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Login</b> below
          </h4>
        </div>
        <Container>
          <Row xs={1} md={2}>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  // error={errors.password}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
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

export default withRouter(LoginPage);
