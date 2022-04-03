import axios from "axios";
import { ApiData } from "./interfaces";

axios.defaults.baseURL = 'http://localhost:3001';

export function postRequest(route: string, data: ApiData) {
  axios
    .post(route, data.body, {
      params: data.query,
      headers: data.headers,
    })
    .then((res) => {
      data.success && data.success(res.data);
    })
    .catch((err) => {
      console.log(err);
      if (err.response) data.fail && data.fail(err.response.data);
      else data.error && data.error();
    });
}
export function putRequest(route: string, data: ApiData) {
  axios
    .put(route, data.body, {
      params: data.query,
      headers: data.headers,
    })
    .then((res) => {
      data.success && data.success(res.data);
    })
    .catch((err) => {
      console.log(err);
      if (err.response) data.fail && data.fail(err.response.data);
      else data.error && data.error();
    });
}
export function getRequest(route: string, data: ApiData) {
  axios
    .get(route, {
      params: data.query,
      headers: data.headers,
    })
    .then((res) => {
      data.success && data.success(res.data);
    })
    .catch((err) => {
      if (err.response) data.fail && data.fail(err.response.data);
      else data.error && data.error();
    });
}
