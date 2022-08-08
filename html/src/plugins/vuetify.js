import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

// default theme changed from light to dark
export default new Vuetify({
	theme: {
		dark: true,
	},
});
