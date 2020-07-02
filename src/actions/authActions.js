import {
  SET_CURRENT_USER,
  REGISTER_USER,
  USER_LOADING,
  LOGOUT_USER,
} from "./../actions/types";

export const loginUser = (userData) => ({
  type: SET_CURRENT_USER,
  payload: userData,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setUserLoading = () => ({
  type: USER_LOADING,
});

// Set logged in user
// export const setCurrentUser = (decoded) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//   };
// };
