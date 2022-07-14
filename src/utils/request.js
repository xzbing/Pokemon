import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: 'https://mock.apifox.cn',
  timeout: 5000 
})

// 请求拦截
request.interceptors.request.use(config => {
  return config
}),error => {
  return Promise.reject(error)
};

// 响应拦截
request.interceptors.response.use(response => {
  return response
}),error => {
  return Promise.reject(error)
};

export default request