<template>
	<v-app dark v-if="isVisible">
		<component :is="view" />
	</v-app>
</template>

<script>
import BasicCard from "./views/BasicCard";
import { mapMutations } from "vuex";
export default {
	name: "App",
	data: () => ({
		view: BasicCard,
		isVisible: false,
	}),
	methods: {
		...mapMutations(["setPlayerID"]),
		toggleShow(view) {
			switch (view) {
				case "base":
					this.view = BasicCard;
					break;
				default:
					break;
			}
			this.isVisible = !this.isVisible;
		},
	},
	mounted() {
		this.listener = window.addEventListener("message", (e) => {
			const item = e.data || e.detail;
			if (this[item.type]) this[item.type](item);
		});
	},
	destroyed() {
		window.removeEventListener("message", this.listener);
	},
};
</script>
<style>
::-webkit-scrollbar {
	width: 0;
	display: inline !important;
}
.v-application {
	background: rgb(0, 0, 0, 0.5) !important;
}
</style>
