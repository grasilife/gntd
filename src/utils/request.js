import axios from "axios";
import store from "@/store";
import Vue from "vue";
import http from "http";
import https from "https";
import { getToken } from "@/utils/auth";
let config = {
  // 自定义的请求头
  headers: {
    post: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    "X-Requested-With": "XMLHttpRequest"
  },
  // 超时设置
  timeout: 100000,
  // 跨域是否带Token
  withCredentials: false,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: "json",
  // XSRF 设置
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
};
// create an axios instance
const service = axios.create(config);

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token --['X-Token'] as a custom key.
      // please modify it according to the actual situation.
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  response => {
    const res = response.data;
    const status = response.status;
    // if the custom code is not 20000, it is judged as an error.
    if (status === 200) {
      return res;
    } else if (status === 500) {
      Vue.prototype.$Notice.open({
        title: "消息提示",
        desc: "鉴权失败"
      });
    } else {
      Vue.prototype.$Notice.open({
        title: "消息提示",
        desc: res.message || "error"
      });
      return Promise.reject(res.message || "error");
    }
  },
  error => {
    console.log("err" + error); // for debug
    Vue.prototype.$Notice.open({
      title: "消息提示",
      desc: error.message || "error"
    });
    return Promise.reject(error);
  }
);

export default service;
