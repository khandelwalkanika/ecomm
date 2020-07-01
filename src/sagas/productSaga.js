import axios from "axios";
// import { GET_PRODUCT } from "../actions/types"; //SET_LISTS

import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";

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
  console.log(" COming here..generatorFunc???");

  const response = yield axios.get(
    "http://localhost:5000/api/users/getProducts"
  );
  const products = response.data.products;
  console.log("PRODUCTS:", products);
  yield put({
    type: "GET_ALL_PRODUCTS",
    payload: { products },
  });
}

function* actionWatcher() {
  console.log("Im in action watcherrrr...");
  yield takeLatest("GET_PRODUCT", getAllProducts);
}

export default function* rootSaga() {
  console.log(" ROOT SAGA........"); // getting this
  // yield all([getProducts()]);
  yield all([actionWatcher()]);
}
