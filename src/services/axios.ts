import axios from 'axios';
import { message } from 'antd';

// 自定义请求
const axiosInstance = axios.create({
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    message.error('请求错误');
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);

export default axiosInstance;
