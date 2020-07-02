import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  INCREMENT_ITEM,
  DELETE_ITEM,
  CART_ITEM,
  SET_PRICE,
  PLACE_ORDER,
  GET_ONE_PRODUCT,
  GET_THAT_PRODUCT,
} from "./../actions/types";
// const apiCall = async () => {
//   try {
//     console.log(" API Calll???");
//     return await axios.get("http://localhost:5000/api/users/getProducts");
//   } catch (error) {
//     console.log(error);
//   }
// };
//worker
function* getAllProducts() {
  console.log("GET ALL PRODUCT Api");
  const response = yield axios.get(
    "http://localhost:5000/api/users/getProducts"
  );
  console.log("Api", response.data);

  const products = response.data.products;
  yield put({
    type: GET_ALL_PRODUCTS,
    payload: { products },
  });
}
export function* actionWatcher() {
  yield takeLatest(GET_PRODUCT, getAllProducts);
}

//Get one product
function* getOneProduct(action) {
  const response = yield axios.get(
    `http://localhost:5000/api/users/getProducts/${action.payload}`
  );
  const products = response.data;
  yield put({
    type: GET_THAT_PRODUCT,
    payload: { products },
  });
}
export function* fetchOneWatcher() {
  yield takeLatest(GET_ONE_PRODUCT, getOneProduct);
}

//Increment the item number
function* incrementProduct(id) {
  yield put({
    type: INCREMENT_ITEM,
    payload: { id },
  });
}

export function* incrementWatcher(id) {
  yield takeLatest(INCREMENT_ITEM, incrementProduct(id));
}

//Get Cart Item
function* cartProduct() {
  yield put({
    type: CART_ITEM,
    payload: {},
  });
}

export function* cartItemWatcher() {
  yield takeLatest(CART_ITEM, cartProduct());
}

//Deleting the item from Cart
function* deleteProduct(id) {
  yield put({
    type: DELETE_ITEM,
    payload: { id },
  });
}

export function* deleteItemtWatcher(id) {
  yield takeLatest(DELETE_ITEM, deleteProduct(id));
}

//Price Set
function* setPrice(price) {
  yield put({
    type: SET_PRICE,
    payload: { price },
  });
}

export function* setPriceWatcher(price) {
  yield takeLatest(SET_PRICE, setPrice(price));
}

//Checking out/ Placing order
//worker
function* onCheckout(orderPayload) {
  const response = yield axios.post(
    "http://localhost:5000/api/users/checkout",
    orderPayload.payload
  );
  orderPayload.history.push("/listings"); // ERROR KK-not going to this route
  // yield put({
  //   type: PLACE_ORDER,
  //   payload: {},
  // });
}
export function* checkoutWatcher() {
  yield takeLatest(PLACE_ORDER, onCheckout);
}
