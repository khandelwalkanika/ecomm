import { all, takeEvery, takeLatest, call } from "redux-saga/effects";
// // // import { watchFetchBook } from 'sagas/BookSagas';
// // // import adminProductReducer from "./../reducers/adminProductReducer";
// // // import authReducer from "./../reducers/authReducers";
// // // import userReducer from "./../reducers/userReducer";
// // //dispatch->saga->
import actionWatcher from "./productSaga";

// // export default function* rootSaga() {
// //   yield all([loginUser()]);
// //   //   yield takeLatest
// // }

export default function* rootSaga() {
  console.log(" in...ROOT SAGA........");
  // yield all([getProducts()]);
  yield all([actionWatcher()]);
}
