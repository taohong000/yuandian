// 请求
import axios from 'axios'
import auth from './auth'

/* 全局默认配置 */
var request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
/* 请求拦截器 */
request.interceptors.request.use(
  config => {
    config.headers.token = auth.getToken()

    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/* 响应拦截器 */
request.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
