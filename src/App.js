import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Listing from "./components/Product/listing";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import data from "./components/data.json";
import Cart from "./components/Cart/cart";
import Checkout from "./components/Checkout/checkout";

import PrivateRoute from "./components/private-route/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import PrivateRoute from "./PrivateRoute";
// import { AuthContext } from "./context/auth";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {
  setCurrentUser,
  logoutUser,
  storeProductInState,
} from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  console.log("STORE DISPATCH:", localStorage.allProducts);
  store.dispatch(storeProductInState());

  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and expired token
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  state = {
    listingsRings: data.listingsRings,
    listingsNecklace: data.listingsNecklace,
    cart: [],
    isAuthenticated: false,
  };
  // constructor() {
  //   super();
  // }
  onLoggedin = () => {
    this.setState({ isAuthenticated: true });
  };
  addToCart = (list) => {
    let listings;
    if (list.type === "rings") {
      listings = [...this.state.listingsRings];
    } else {
      listings = [...this.state.listingsNecklace];
    }
    const index = listings.findIndex((item) => item.id === list.id);
    listings[index].numOfItems++;
    if (list.type === "rings") {
      this.setState({ listingsRings: listings });
    } else {
      this.setState({ listingsNecklace: listings });
    }
    this.setState({
      cart: [
        ...this.state.listingsRings,
        ...this.state.listingsNecklace,
      ].filter((item) => item.numOfItems > 0),
    });
  };

  clickCart = () => {
    // this.props.history.push(path);
  };

  deleteCartItem = (cartDataId, cartDataType, cartData) => {
    const newListsRings = [...this.state.listingsRings];
    const newListsNecklace = [...this.state.listingsNecklace];

    const deletedItemInfo = cartData.filter((item) => {
      return item.type === cartDataType && item.id === cartDataId;
    });
    console.log("deletedItemInfo ", deletedItemInfo);

    if (cartDataType === "rings") {
      const indexRings = newListsRings.findIndex(
        (item) => item.id === cartDataId
      );
      newListsRings[indexRings].numOfItems = 0;
    } else {
      const indexNecklace = newListsNecklace.findIndex(
        (item) => item.id === cartDataId
      );
      newListsNecklace[indexNecklace].numOfItems = 0;
    }

    this.setState({
      cart: cartData.filter((item) => {
        return !(item.type === cartDataType && item.id === cartDataId);
      }),
      listingsRings: newListsRings,
      listingsNecklace: newListsNecklace,
    });
  };
  deleteAllCartItem = () => {
    //back to original state

    const newListsRings = [...this.state.listingsRings];
    const newListsNecklace = [...this.state.listingsNecklace];
    console.log("Do i even get called?");
    for (let i in newListsRings) {
      newListsRings[i].numOfItems = 0;
    }
    for (let i in newListsNecklace) {
      newListsNecklace[i].numOfItems = 0;
    }
    this.setState({
      listingsRings: newListsRings,
      listingsNecklace: newListsNecklace,
      cart: [],
    });
  };
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar
              onClickCart={this.clickCart}
              isAuth={this.state.isAuthenticated}
            />

            <Route
              path="/"
              exact={true}
              // isAuth=
              render={() => <Login isAuth={this.onLoggedin} />}
            />
            <Route path="/register" exact render={() => <Register />} />
            <Switch>
              <PrivateRoute
                exact
                path="/listings"
                isAuthenticated={this.state.isAuthenticated}
                onAdding={this.addToCart}
                rings={this.state.listingsRings}
                necklace={this.state.listingsNecklace}
                component={Listing}
              />
              <PrivateRoute
                path="/cart"
                exact
                component={Cart}
                cartData={this.state.cart}
                onDelete={this.deleteCartItem}
                onCheckoutDelete={this.deleteAllCartItem}
              />
              <PrivateRoute exact path="/checkout" component={Checkout} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
