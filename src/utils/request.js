import axios from "axios";
import URL from "./url";
const service = axios.create({
  baseURL: URL,
  timeout: 5000,
});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
