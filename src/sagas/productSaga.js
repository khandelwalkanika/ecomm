import axios from "axios";
import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import { GET_ALL_PRODUCTS, GET_PRODUCT } from "./../actions/types";
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
  const response = yield axios.get(
    "http://localhost:5000/api/users/getProducts"
  );
  const products = response.data.products;
  yield put({
    type: GET_ALL_PRODUCTS,
    payload: { products },
  });
}

export default function* actionWatcher() {
  yield takeLatest(GET_PRODUCT, getAllProducts);
}
