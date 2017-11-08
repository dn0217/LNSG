import axios from 'axios'
import config from './config'

// Request 拦截器
axios.interceptors.request.use(
  reConfig => {
    return reConfig
  },
  error => {
    return Promise.reject(error)
  }
)

// Response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error
  }
)

export default {
    // 获取导航栏
    getNav(param) {
      return axios.get('/nav/check', param, config)
    },
    // 获取所有文章列表
    getActicle(param) {
      return axios.get('/acticle/allActicle', param, config)
    },
    // 获取指定文章
    getOneActicle(param) {
      return axios.get('/acticle/oneActicle/' + param, param, config)
    }
}