import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		playerID: "",
	},
	getters: {
		playerID(state) {
			return state.playerID;
		},
	},
	mutations: {
		setPlayerID(state, payload) {
			state.playerID = payload.data;
		},
	},
	actions: {},
});
