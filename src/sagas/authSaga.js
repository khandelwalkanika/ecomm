import axios from "axios";
import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";

import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  SET_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  REGISTER_USER,
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
function* loginOfUser(signupPayload) {
  const response = yield axios.post(
    "http://localhost:5000/api/users/login",
    signupPayload.payload
  );
  const { token, userRole } = response.data;
  localStorage.setItem("jwtToken", token);
  localStorage.setItem("userRole", userRole);
  setAuthToken(token);
  const decoded = jwt_decode(token);
  yield put({
    type: SET_USER,
    payload: decoded,
  });
}
export function* loginWatcher() {
  yield takeLatest(SET_CURRENT_USER, loginOfUser);
}

//Register
function* registerTheUser(newUser, history) {
  const response = yield axios.post(
    "http://localhost:5000/api/users/register",
    newUser
  );

  history.push("/");
}
export function* registerWatcher(newUser, history) {
  yield takeLatest(REGISTER_USER, registerTheUser(newUser, history));
}

//logout
function* logoutOfUser() {
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // yield put({
  //   type: LOGOUT_USER,
  //   payload: {},
  // });
}
export function* logoutWatcher() {
  yield takeLatest(LOGOUT_USER, logoutOfUser());
}
