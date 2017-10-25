// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false
let type = 'dev' //dev 开发模式 build 发布模式
Vue.prototype.dnlog = msg =>  type == 'dev' ? console.log(msg) : void 0;
// Vue.prototype.axios = axios

// /* eslint-disable no-new */

// axios.interceptors.request.use(function (config) {  //配置发送请求的信息
//   //stores.dispatch('showLoading')  
//   //alert(1)
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//   //stores.dispatch('hideLoading')
//   //alert(2)
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})