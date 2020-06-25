import axios from "axios";
import {
  ADD_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ERRORS,
  INCREMENT_ITEM,
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
//onAddingtocart
export const onAddingToCart = (id) => (dispatch) => {
  dispatch(addToCart(id));
};
export const addToCart = (id) => {
  return {
    type: INCREMENT_ITEM,
    payload: { id },
  };
};
//get products
export const getProducts = (id) => (dispatch) => {
  let url = "";
  if (id) {
    url = `http://localhost:5000/api/users/getProducts/${id}`;
  } else {
    url = "http://localhost:5000/api/users/getProducts";
  }
  console.log("URL SELECTED:", url);
  axios
    .get(url)
    .then((res) => {
      let finalData;
      if (id) {
        finalData = res.data;
      } else {
        finalData = res.data.products;
      }

      dispatch(storeProductInState(finalData));
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const storeProductInState = (products) => {
  return {
    type: GET_PRODUCT,
    payload: { products },
  };
};
//update a product
export const updateThisProduct = function (updatedData, id, history) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:5000/api/users/updateProduct/${id}`, updatedData)
      .then((res) => {
        dispatch(updateData(res.data.products));
        history.push("/productLists");
      }) // re-direct to list page
      .catch((err) => console.log(err));
  };
};
export const updateData = (products) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { products },
  };
};

//delete product
export const deleteThisProduct = function (id) {
  return function (dispatch) {
    return axios
      .delete(`http://localhost:5000/api/users/deleteProduct/${id}`)
      .then((res) => {
        dispatch(deleteData(res.data.products));
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
