import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import api from "./api/api"
Vue.prototype.api = api

Vue.config.productionTip = false
let type = 'dev' 
Vue.prototype.log = msg =>  'dev' == 'dev' ? console.log(msg) : void 0;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})