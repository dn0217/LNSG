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
    // 获取所有文章列表
    getActicle(param) {
      return axios.get('/article/allRelease', param, config)
    },
    // 获取推荐新闻列表
    getNews(param) {
      return axios.get('/news/allRelease', param, config)
    },
    // 获取推荐新闻列表
    getRecommended(param) {
      return axios.get('/article/getRecommended', param, config)
    },
    // 文章详情
    articleDetail(param) {
      return axios.get('/article/release/' + param, param, config)
    },
    //获取用户信息
    getUserInfo(param) {
      return axios.get('/userInfo/detailInfo/' + param, param, config)
    },
    //评论
    commentActicle(param) {
      return axios.post('/article/comment', param)
    },
    //获取个人的文章评论状态
    acticleState(param) {
      return axios.get('/article/comment/state?author=' + param.author + '&acticle=' + param.acticle, param)
    },
}