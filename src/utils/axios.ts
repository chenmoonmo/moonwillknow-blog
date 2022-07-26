import axios from "axios";
import qs from "querystring";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

//  const request = axios.create({
//   baseURL,
//   timeout: 30000,
// });

// request.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// request.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const request = {
 async get(url: string, data?:any) {
    const response = await fetch(`${baseURL}${url}?${qs.stringify({...data})}`);
    return response.json();
  },
};

export default request;
