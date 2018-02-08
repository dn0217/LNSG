import Qs from 'qs'

export default {
  //请求的服务器地址
  url: '/',
  baseURL: process.env.BASE_URL,
  
  //put/post/patch
  transformRequest: [function(data) {
    // 为了避免qs格式化时对内层对象的格式化先把内层的对象转为
    data = JSON.stringify(data)
      // 由于使用的form-data传数据所以要格式化
      // data = Qs.stringify(data)
      // console.log(data)
    return data
  }],
  
  transformResponse: [function(data) {
    return data
  }],
  
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  
  params: {
    
  },

  paramsSerializer: function(params) {
    return Qs.stringify(params)
  },

  timeout: 20000,

  withCredentials: true, // default

  responseType: 'json', // default

  onUploadProgress: function(progressEvent) {
    // Do whatever you want with the native progress event
  },
  
  onDownloadProgress: function(progressEvent) {
    // Do whatever you want with the native progress event
  },
  
  maxContentLength: 2000,

  validateStatus: function(status) {
    return status >= 200 && status < 300 // default
  },

  maxRedirects: 5 // default
}

