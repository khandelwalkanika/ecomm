import axios from "axios";
import {
  ADD_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ERRORS,
} from "./types";

export const uploadProduct = function (productData, history) {
  return function (dispatch) {
    return axios
      .post("http://localhost:5000/api/users/uploadProducts", productData)
      .then((res) => {
        dispatch(uploadData(res.data));
        history.push("/productLists");
      }) // re-direct to list page
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  };
};
export const uploadData = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const getProducts = () => (dispatch) => {
  //fetch('/users').then(res => res.json())
  axios
    .get("http://localhost:5000/api/users/getProducts")
    .then((res) => {
      dispatch(storeProductInState(res.data.products));
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
//get products
export const storeProductInState = (products) => {
  return {
    type: GET_PRODUCT,
    payload: { products },
  };
};

//update a product
export const updateThisProduct = function (id) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:5000/api/users/updateProduct/${id}`)
      .then((res) => {
        console.log(" response updated ", res.data);
        dispatch(updateData());
        // /return { ...state, productData: action.payload.products.filter( (post) => post._id !== action.payload.products._id ), };
      }) // re-direct to list page
      .catch((err) => console.log(err));
  };
};
export const updateData = () => {
  return {
    type: UPDATE_PRODUCT,
    payload: {},
  };
};

//delete product
export const deleteThisProduct = function (id) {
  return function (dispatch) {
    return axios
      .delete(`http://localhost:5000/api/users/deleteProduct/${id}`)
      .then((res) => {
        dispatch(deleteData(res.data.products));
        // /return { ...state, productData: action.payload.products.filter( (post) => post._id !== action.payload.products._id ), };
      }) // re-direct to list page
      .catch((err) => console.log(err));
  };
};
export const deleteData = (products) => {
  return {
    type: DELETE_PRODUCT,
    payload: { products },
  };
};
