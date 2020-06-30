import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  INCREMENT_ITEM,
  CART_ITEM,
  DELETE_ITEM,
  SET_PRICE,
  PLACE_ORDER,
} from "./types";

// // Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//     yield delay(1000)
//     yield put({ type: 'INCREMENT' })
//   }

//   // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
//   export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
//   }

//onAddingtocart
// export const onAddingToCart = (id) => (dispatch) => {
//   dispatch(addToCart(id));
// };
// export const addToCart = (id) => {
//   return {
//     type: INCREMENT_ITEM,
//     payload: { id },
//   };
// };
// SAGA
const addToCart = (dataId) => {
  return dataId;
};

function* onAddingToCart(dataId) {
  try {
    const id = yield call(addToCart(dataId));
    yield put({ type: INCREMENT_ITEM, payload: { id } });
  } catch (e) {
    console.log(e);
  }
}

export const yourCart = () => (dispatch) => {
  dispatch(cart());
};
export const cart = () => {
  return {
    type: CART_ITEM,
    payload: {},
  };
};

//deletingFromCart
export const onDeletingFromCart = (id) => (dispatch) => {
  dispatch(deleteCartItem(id));
};
export const deleteCartItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: { id },
  };
};

// export const setPrice = (price) => (dispatch) => {
//   dispatch(setTotalPrice(price));
// };
// export const setTotalPrice = (price) => {
//   return {
//     type: SET_PRICE,
//     payload: { price },
//   };
// };

const setTotalPrice = (dataPrice) => {
  return dataPrice;
};

function* setPrice(dataPrice) {
  try {
    const price = yield call(setTotalPrice(dataPrice));
    yield put({ type: SET_PRICE, payload: { price } });
  } catch (e) {
    console.log(e);
  }
}

// export const onCheckout = (userData, history) => (dispatch) => {
//   axios
//     .post("http://localhost:5000/api/users/checkout", userData)
//     .then((res) => {
//       dispatch(placeOrder());
//       history.push("/listings");
//     }) // re-direct to listings on successful checkout
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// export const placeOrder = () => {
//   return {
//     type: PLACE_ORDER,
//     payload: {},
//   };
// };

//THIS IS SAGA

const placeOrder = (userData) => {
  return axios.post("http://localhost:5000/api/users/checkout", userData);
};

function* onCheckout(userData, history) {
  try {
    history.push("/listings");
    const response = yield call(placeOrder(userData));
    console.log("RESPONSEin placing order:", response);
    yield put({ type: PLACE_ORDER, payload: {} });
  } catch (e) {
    console.log("Error in placing order:", e);
  }
}

export { onCheckout, setPrice, onAddingToCart };
