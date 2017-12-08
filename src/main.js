import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import api from "./api/api"

Vue.config.productionTip = false
let type = 'dev' 
Vue.prototype.log = msg =>  'dev' == 'dev' ? console.log(msg) : void 0;
Vue.prototype.api = api

Vue.filter('filterTime', time => {
	if (time) {
			time = parseInt(time)
			var oDate = new Date(time);
			var y = oDate.getFullYear();
			var m = oDate.getMonth() + 1;
			var d = oDate.getDate();
			var h = oDate.getHours();
			var mm = oDate.getMinutes();
			var s = oDate.getSeconds();
			var week = "";
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