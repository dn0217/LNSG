import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import api from "./api/api"
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
let type = 'dev' 
Vue.prototype.log = msg =>  'dev' == 'dev' ? console.log(msg) : void 0;
Vue.prototype.api = api
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})