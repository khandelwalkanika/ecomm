import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Listing from "./components/Product/listing";
import Login from "./components/Login/login";
import data from "./components/data.json";
import Cart from "./components/Cart/cart";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    listingsRings: data.listingsRings,
    listingsNecklace: data.listingsNecklace,
    cart: [],
    activeScreen: "listings",
  };
  constructor() {
    super();
  }

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
            <Navbar onClickCart={this.clickCart} />
            <hr />

            <main className="container">
              <Route path="/" exact={true} render={() => <Login />} />

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
