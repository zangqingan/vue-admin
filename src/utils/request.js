// 拦截器模块
import axios from "axios";
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/devApi";
// 创建实例
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000
});
// 请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
//响应拦截器
instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);
// 导出
export default instance;
