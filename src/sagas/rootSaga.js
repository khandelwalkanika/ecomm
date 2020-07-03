import { all, takeEvery, takeLatest, call, fork } from "redux-saga/effects";
// // // import { watchFetchBook } from 'sagas/BookSagas';
// // // import adminProductReducer from "./../reducers/adminProductReducer";
// // // import authReducer from "./../reducers/authReducers";
// // // import userReducer from "./../reducers/userReducer";
// // //dispatch->saga->
import {
  actionWatcher,
  incrementWatcher,
  deleteItemtWatcher,
  cartItemWatcher,
  setPriceWatcher,
  checkoutWatcher,
  fetchOneWatcher,
} from "./productSaga";
import { loginWatcher, logoutWatcher, registerWatcher } from "./authSaga";
import {
  addNewProductWatcher,
  updateProductWatcher,
  deleteProductWatcher,
} from "./adminSaga";
// // export default function* rootSaga() {
// //   yield all([loginUser()]);
// //   //   yield takeLatest
// // }

export default function* rootSaga() {
  console.log(" in...ROOT SAGA........");
  yield all([
    loginWatcher(),
    logoutWatcher(),
    registerWatcher(),
    actionWatcher(),
    incrementWatcher(),
    deleteItemtWatcher(),
    cartItemWatcher(),
    setPriceWatcher(),
    checkoutWatcher(),
    fetchOneWatcher(),
    updateProductWatcher(),
    deleteProductWatcher(),
    addNewProductWatcher(),
  ]);
}
