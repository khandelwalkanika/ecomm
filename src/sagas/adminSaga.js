import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_ONE_PRODUCT,
  UPLOAD_THE_PRODUCT,
  UPDATE_THIS_PRODUCT,
} from "./../actions/types";

//Get one product
function* deleteThisProduct(action) {
  console.log("DELETE THIS ID", action.payload);

  const response = yield axios.delete(
    `http://localhost:5000/api/users/deleteProduct/${action.payload}`
  );
  const products = response.data.products;
  console.log("updated products", response.data);

  yield put({
    type: DELETE_PRODUCT,
    payload: { products },
  });
}
export function* deleteProductWatcher() {
  yield takeLatest(DELETE_ONE_PRODUCT, deleteThisProduct);
}

//update the Product
function* updateThisProduct(action) {
  const response = yield axios.post(
    `http://localhost:5000/api/users/updateProduct/${action.payload.productId}`,
    action.payload.formData,
    {
      headers: { "content-type": "multipart/form-data" },
    }
  );
  const products = response.data.products;
  action.payload.history.push("/productLists");
  yield put({
    type: UPDATE_PRODUCT,
    payload: { products },
  });
}
export function* updateProductWatcher() {
  yield takeLatest(UPDATE_THIS_PRODUCT, updateThisProduct);
}

//uploadProduct
function* uploadProduct(action) {
  console.log("UPLOAD ACTION----------api--------:", action);
  const response = yield axios.post(
    "http://localhost:5000/api/users/uploadProducts",
    action.payload.formData,
    {
      headers: { "content-type": "multipart/form-data" },
    }
  );
  const data = response.data;
  console.log("REsponse on adding the product", response.data);
  action.payload.history.push("/productLists");
  //   yield put({
  //     type: ADD_PRODUCT,
  //     payload: { data },
  //   });
}
export function* addNewProductWatcher() {
  console.log("m i in the watcher");
  yield takeLatest(UPLOAD_THE_PRODUCT, uploadProduct);
}
