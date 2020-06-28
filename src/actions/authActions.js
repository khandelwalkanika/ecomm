import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types"; //SET_LISTS
// Register User
export const registerUser = function (userData, history) {
  return function (dispatch) {
    return axios
      .post("http://localhost:5000/api/users/register", userData)
      .then((res) => history.push("/")) // re-direct to login on successful register
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  };
};

//Placing Order- CHECKOUT
// export const placeOrder = (userData, history) => (dispatch) => {
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
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/users/login", userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token, userRole } = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userRole", userRole);
      /* The usage of the local storage is fairly straight forward. In your JavaScript code, running in the browser, you should have access to the localStorage instance which has setter and getter to store and retrieve data from the local storage */
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data ~decoding JWTs token which are Base64Url encoded
      const decoded = jwt_decode(token);
      // Set current user
      // const userData1 = { decoded, userRole };
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
