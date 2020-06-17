import React, { Component } from "react";
import "./listing.css";
class Cart extends Component {
  componentDidUpdate() {
    console.log("--------<>", this.props);
  }

  state = {
    totalPrice: 0,
    cartData: [],
  };
  render() {
    return (
      <div>
        <div>
          <button
            className="btn btn-primary"
            style={{ float: "right" }}
            onClick={() => this.props.showListings()}
          >
            Continue Shopping
          </button>
        </div>

        <span>You have {this.props.cartData.length} items</span>

        {this.props.cartData.map((list, i) => (
          <>
            <div className="div-style">
              <div className="idiv-size" key={i}>
                <img
                  src={list.imgPath}
                  alt={"boohoo"}
                  className="img-responsive "
                  style={{ height: "100px" }}
                  key={list.id}
                />
              </div>
              <div className="idiv-size">
                <span className="badge m-2 badge-warning">
                  {" "}
                  {list.type} {list.id}{" "}
                </span>

                <span className="badge badge-pill badge-light">
                  {" "}
                  Quantity:
                  {list.numOfItems}
                </span>
                <span className="badge badge-pill badge-light">
                  {" "}
                  Price: $
                  {list.price +
                    "x" +
                    list.numOfItems +
                    ":" +
                    list.price * list.numOfItems}{" "}
                </span>
              </div>
              <div className="idiv-size">
                <button
                  onClick={() =>
                    this.props.onDelete(list.id, list.type, this.props.cartData)
                  }
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        ))}

        <hr />
        <hr />
        <div>
          <span className="badge badge-pill badge-light">
            <button type="button" class="btn btn-outline-success">
              Total Price :{getTotalPrice(this.props.cartData)}
            </button>
          </span>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

function getTotalPrice(cartData) {
  let totalPrice = 0;
  cartData.forEach((item) => {
    totalPrice = totalPrice + item.numOfItems * item.price;
  });
  return totalPrice;
}

function deleteItem(cartData1) {
  console.log("--kkk---->", cartData1);
  const cartData = cartData1.filter((c) => c.id !== cartData1);
  //this.props.cartData = { cartData };
}