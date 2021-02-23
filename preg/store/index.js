import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		isUniverifyLogin: false,
		loginProvider: "",
		// openid: null,
		// testvuex: false,
		colorIndex: 0,
		colorList: ['#FF0000', '#00FF00', '#0000FF'],
		// noMatchLeftWindow: true,
		// active: 'componentPage',
		// leftWinActive: '/pages/component/view/view',
		activeOpen: '',
		// menu: [],
		// univerifyErrorMsg: ''
	}
	// ,
	// mutations: {
	// 	setActiveOpen(state, activeOpen) {
	// 		state.activeOpen = activeOpen
	// 	}
	// },
})
		export default store