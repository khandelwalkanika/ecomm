import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Listing from "./components/Product/listing";
import data from "./components/data.json";
import Cart from "./components/Cart/cart";
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
    this.setState({ activeScreen: "cart" });
  };
  onShowingLists = () => {
    this.setState({ activeScreen: "listings" });
  };

  deleteCartItem = (cartDataId, cartDataType, cartData) => {
    /** listingsRings: (this.state.listingsRings[cartDataId].numOfItems = 0),
      listingsNecklace: this.state.listingsNecklace.filter((item) => {
        return item.type !== cartDataType || item.id !== cartDataId;
      }), */
    this.setState({
      cart: cartData.filter((item) => {
        return !(item.type === cartDataType && item.id === cartDataId);
      }),
    });
  };
  render() {
    return (
      <>
        <Navbar onClickCart={this.clickCart} />
        <hr />
        <main className="container">
          <div hidden={this.state.activeScreen !== "listings"}>
            <Listing
              // onReset={this.handleReset}
              // onDelete={this.handleDelete}
              onAdding={this.addToCart}
              rings={this.state.listingsRings}
              necklace={this.state.listingsNecklace}
            />
          </div>
          <div hidden={this.state.activeScreen !== "cart"}>
            <Cart
              cartData={this.state.cart}
              onDelete={this.deleteCartItem}
              showListings={this.onShowingLists}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
