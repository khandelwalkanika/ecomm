import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Listing from "./components/Product/listing";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import data from "./components/data.json";
import Cart from "./components/Cart/cart";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  state = {
    listingsRings: data.listingsRings,
    listingsNecklace: data.listingsNecklace,
    cart: [],
    isAuthenticated: false,
    cartButton: false,
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
        <BrowserRouter>
          <div>
            <Navbar
              onClickCart={this.clickCart}
              isAuth={this.state.isAuthenticated}
            />
            <hr />

            <main className="container">
              <Route
                path="/"
                exact={true}
                render={() => (
                  <Login
                    isAuth={this.onLoggedin}
                    isAuthenticated={this.state.isAuthenticated}
                  />
                )}
              />
              <Route path="/register" exact render={() => <Register />} />
              <Route
                path="/listings"
                exact={true}
                render={() => (
                  <Listing
                    onAdding={this.addToCart}
                    rings={this.state.listingsRings}
                    necklace={this.state.listingsNecklace}
                  />
                )}
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
            </main>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
