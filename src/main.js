import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import api from "./api/api"

import 'lib-flexible'

Vue.config.productionTip = false
let type = 'dev' 
Vue.prototype.log = msg =>  'dev' == 'dev' ? console.log(msg) : void 0;
Vue.prototype.api = api
Vue.filter('filterTime', time => {
	if (time) {
			time = parseInt(time)
			var oDate = new Date(time)
			 ,y = oDate.getFullYear()
			 ,m = oDate.getMonth() + 1
			 ,d = oDate.getDate()
			 ,h = oDate.getHours()
			 ,mm = oDate.getMinutes()
			 ,s = oDate.getSeconds()
			 ,week = "";
			switch (oDate.getDay()) {
				case 0:
					week = "星期天";
					break
				case 1:
					week = "星期一";
					break
				case 2:
					week = "星期二";
					break
				case 3:
					week = "星期三";
					break
				case 4:
					week = "星期四";
					break
				case 5:
					week = "星期五";
					break
				case 6:
					week = "星期六";
					break
			}
			return y + '.' + m + '.' + d + '	' + week;
		}
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})