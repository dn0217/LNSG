import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		'isShowHeader': true
	},

	actions: {
		isShowHeader({ commit }, platform){
			commit('isShowHeader', platform)
		}
	},
	
	mutations: {
		isShowHeader(state, platform){
			state.isShowHeader = platform;
		}
	},

	getters: {	
        isShowHeader : state => state.isShowHeader   
	}
})

export default store
