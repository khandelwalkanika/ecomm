import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Listing from "./components/Product/listing";
import SingleProduct from "./components/Product/singleProduct";
import Cart from "./components/Cart/cart";
import Checkout from "./components/Checkout/checkout";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";

// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    isAuthenticated: false,
  };
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar isAuth={this.state.isAuthenticated} />
            <Route
              path="/"
              exact={true}
              // isAuth=
              render={() => <Login isAuth={this.onLoggedin} />}
            />
            <Route path="/register" exact render={() => <Register />} />
            <Switch>
              <PrivateRoute exact path="/listings" component={Listing} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute exact path="/checkout" component={Checkout} />
              <PrivateRoute
                exact
                path="/singleProduct/:id"
                component={SingleProduct}
              />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
