import React, { Component } from "react";
import "./listing.css";
//import Lists from "./lists";
class Listing extends Component {
  //   state = {
  //     listingsRings: [
  //       {
  //         id: 1,
  //         price: 500,
  //         numOfItems: 0,
  //         type: "rings",
  //         imgPath:
  //           "https://images-na.ssl-images-amazon.com/images/I/818d09FYGWL._UL1500_.jpg",
  //       },
  //       {
  //         id: 2,
  //         price: 300,
  //         numOfItems: 0,
  //         type: "rings",
  //         imgPath:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdymVuWv_VIweNBAwlMycSsIgdmNTSEPFFcseFUyWjfgVD94g7&usqp=CAU",
  //       },
  //       {
  //         id: 3,
  //         price: 200,
  //         numOfItems: 0,
  //         type: "rings",
  //         imgPath:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOXoZ87QMq1M4FxolF_7tPuHsb2eVlfUKJFIBqxK0Aws6uEBZe&usqp=CAU",
  //       },
  //     ],
  //     listingsNecklace: [
  //       {
  //         id: 1,
  //         price: 100,
  //         numOfItems: 0,
  //         type: "necklace",
  //         imgPath:
  //           "https://cdn.augrav.com/online/jewels/2015/09/The-Princess-Diamond-Necklace-Set-4.jpg",
  //       },
  //       {
  //         id: 2,
  //         price: 300,
  //         numOfItems: 0,
  //         type: "necklace",
  //         imgPath:
  //           "https://cdn.augrav.com/online/jewels/2015/09/The-Ultimate-Diamond-Necklace-Set-4.jpg",
  //       },
  //       {
  //         id: 3,
  //         price: 500,
  //         numOfItems: 0,
  //         type: "necklace",
  //         imgPath: "https://www.nahoku.com/product/image/medium/19456_0.jpg",
  //       },
  //     ],
  //   };

  //   componentDidMount() {
  //     console.log(styles);
  //   }
  //   addToCart = (list) => {
  //     let listings;
  //     if (list.type === "rings") {
  //       listings = [...this.props.listingsRings];
  //     } else {
  //       listings = [...this.props.listingsNecklace];
  //     }
  //     const index = listings.findIndex((item) => item.id === list.id);
  //     listings[index].numOfItems++;
  //     if (list.type === "rings") {
  //       this.setState({ listingsRings: listings });
  //     } else {
  //       this.setState({ listingsNecklace: listings });
  //     }
  //   };

  render() {
    return (
      <div>
        <div className="div-style">
          {this.props.rings.map((list, i) => (
            <div className="idiv-size" key={i}>
              <img
                src={list.imgPath}
                alt={"boohoo"}
                className="img-responsive "
                style={{ height: "100px" }}
                key={list.id}
              />
              <span className="badge m-2 badge-warning"> Ring {list.id} </span>
              <span className="badge badge-pill badge-light">
                {" "}
                Price: ${list.price}{" "}
              </span>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => this.props.onAdding(list)}
              >
                Add to Cart
              </button>
              <span className="badge badge-light">
                {list.numOfItems === 0
                  ? " "
                  : "x" + list.numOfItems + " in Cart"}
              </span>
            </div>
          ))}
        </div>
        <hr />

        <div className="div-style">
          {this.props.necklace.map((list, i) => (
            <div className="idiv-size" key={i}>
              <img
                src={list.imgPath}
                alt={"boohoo"}
                className="img-responsive "
                style={{ height: "100px" }}
                key={list.id}
              />
              <span className="badge m-2 badge-warning">
                {" "}
                Necklace {list.id}{" "}
              </span>
              <span className="badge badge-pill badge-light">
                {" "}
                Price: ${list.price}{" "}
              </span>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => this.props.onAdding(list)}
              >
                Add to Cart
              </button>
              <span className="badge badge-light">
                {list.numOfItems === 0
                  ? " "
                  : "x" + list.numOfItems + " in Cart"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Listing;
