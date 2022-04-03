import { getRequest, postRequest, putRequest } from '../utils/apiHelper';
import { ApiData } from '../utils/interfaces';
const endpoint: string = "/cart";

export const getCartItems = (apiData: ApiData) => {
  getRequest(endpoint + "/", apiData);
}

export const addCartItem = (apiData: ApiData) => {
  postRequest(endpoint + "/", apiData);
}

export const removeCartItem = (apiData: ApiData) => {
  putRequest(endpoint + "/", apiData);
}

export const clearCart = (apiData: ApiData) => {
  putRequest(endpoint + "/clear", apiData);
}