import axios from "axios";
import { hideLoading, showLoading } from "../redux/loadingSlice";
import { store } from "../../main";
import { getStoredUser } from "../../utils/LocalStorageHelper";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";

export const CYBER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NyIsIkhldEhhblN0cmluZyI6IjIzLzAzLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3NDIyNDAwMDAwMCIsIm5iZiI6MTc0NzI2NzIwMCwiZXhwIjoxNzc0Mzk2ODAwfQ.8AWlFkAkN_xwXppJe_FTgiJXS4WlItjxLy5olIf33HY";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: CYBER_TOKEN,
    token: "",
  },
});

export const updateAuthToken = (token) => {
  https.defaults.headers["token"] = `${token}`;
};

let userInfo = getStoredUser();
if (userInfo) {
  updateAuthToken(userInfo.token);
}

https.interceptors.request.use(
  function (config) {
    console.log("Api đi");
    store.dispatch(showLoading());

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    console.log("Api về thành công");

    setTimeout(() => {
      store.dispatch(hideLoading());
    }, 1500);

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log("Api về lỗi");
    // Delay 3 giây trước khi ẩn loading dù có lỗi
    setTimeout(() => {
      store.dispatch(hideLoading());
    }, 1500);

    return Promise.reject(error);
  }
);
