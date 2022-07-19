import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

 const request = axios.create({
  baseURL,
  timeout: 30000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;