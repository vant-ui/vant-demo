import axios from 'axios';
import Cookies from 'js-cookie';
import { Dialog, Toast } from 'vant';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
});

service.defaults.withCredentials = true;
service.defaults.crossDomain = true;

// request拦截器
service.interceptors.request.use(
  config => {
    const host = Cookies.get('host');
    const token = Cookies.get('token');
    if (host && token) {
      config.headers['host'] = host;
      config.headers['token'] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    const res = response.data;
    if (res.code === '401') {
      Dialog.confirm({
        title: '错误',
        message: '参数异常，请退出重试！'
      })
      .then(() => {
        this.$router.push('/');
      });
    }
    return response;
  },
  error => {
    console.log('err' + error); // for debug
    Toast.fail(error.message);
    return Promise.reject(error);
  }
);

export default service;

export function getHost() {
  return process.env.BASE_API;
}
