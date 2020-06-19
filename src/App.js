import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Listing from "./components/Product/listing";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import data from "./components/data.json";
import Cart from "./components/Cart/cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import { AuthContext } from "./context/auth";
import { Provider } from "react-redux";
import store from "./store";

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
    /** listingsRings: (this.state.listingsRings[cartDataId].numOfItems = 0), */
    this.setState({
      cart: cartData.filter((item) => {
        return !(item.type === cartDataType && item.id === cartDataId);
      }),
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
            <hr />
            <Route
              path="/"
              exact={true}
              // isAuth=
              render={() => <Login isAuth={this.onLoggedin} />}
            />
            <Route path="/register" exact render={() => <Register />} />
            <PrivateRoute
              path="/listings"
              isAuthenticated={this.state.isAuthenticated}
              onAdding={this.addToCart}
              rings={this.state.listingsRings}
              necklace={this.state.listingsNecklace}
              component={Listing}
            />
            <Route
              path="/cart"
              exact
              render={() => (
                <Cart
                  cartData={this.state.cart}
                  onDelete={this.deleteCartItem}
                />
              )}
            />
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
