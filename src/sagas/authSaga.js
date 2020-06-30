import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { call, put, takeEvery } from "redux-saga/effects";
import { SET_CURRENT_USER } from "./../actions/types"; //SET_LISTS

const loginUserData = (userData) => {
  return axios.post("http://localhost:5000/api/users/login", userData);
};

export function* loginUser(userData) {
  try {
    const response = yield call(loginUserData(userData));
    const { token, userRole } = response.data;
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("userRole", userRole);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    yield put({ type: SET_CURRENT_USER, payload: { decoded } });
  } catch (e) {
    console.log("Error in login:", e);
  }
}

// export const loginUserD = [takeEvery("SET_CURRENT_USER", loginUser)];
