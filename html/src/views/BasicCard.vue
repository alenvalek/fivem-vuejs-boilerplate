<template>
	<v-container fluid fill-height>
		<v-row justify="center" align="center">
			<v-card elevation="2" width="500px" maxWidth="500px" class="px-5 py-5">
				<v-card-title
					>Example Card
					<span
						><v-icon color="primary" size="2rem">mdi-police-badge</v-icon></span
					></v-card-title
				>
				<v-card-subtitle>Welcome to the example card</v-card-subtitle>
				<div v-if="playerID">
					<div>PlayerID: {{ playerID }}</div>
				</div>
				<v-alert type="error" dark shaped v-if="error">{{ error }}</v-alert>
				<v-text-field
					outlined
					label="Your name goes here"
					v-model="userName"
				></v-text-field>
				<v-textarea
					outlined
					label="Your message goes here"
					v-model="message"
				></v-textarea>
				<v-select
					outlined
					:items="colorOptions"
					label="Type of message"
					v-model="typeOfMessage"
				></v-select>
				<v-layout v-if="typeOfMessage" class="previewLayout">
					<div>Color preview:</div>
					<v-avatar :color="typeOfMessage"></v-avatar>
				</v-layout>
				<v-card-actions>
					<v-btn class="ml-auto" color="primary" @click="sendData"
						>Send data</v-btn
					>
					<v-btn color="error" @click="exitMenu">X</v-btn>
				</v-card-actions>
			</v-card>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import api from "../api/axios";

export default {
	name: "BasicCard",
	data() {
		return {
			colorOptions: ["success", "error", "warning", "primary"],
			typeOfMessage: "",
			error: "",
			userName: "",
			message: "",
		};
	},
	computed: {
		...mapGetters(["playerID"]),
	},
	methods: {
		sendError(text) {
			this.error = text;
			setTimeout(() => {
				this.error = "";
			}, 3000);
		},
		async sendData() {
			if (this.userName.length < 3) {
				return this.sendError("Your name should be longer than 2 characters.");
			}
			if (this.message.length < 4) {
				return this.sendError(
					"Your message should be longer than 3 characters."
				);
			}
			if (!this.typeOfMessage) {
				return this.sendError("You must specify the type of message.");
			}

			try {
				await api.post("receiveData", {
					userName: this.userName,
					message: this.message,
					typeOfMessage: this.typeOfMessage,
				});
			} catch (error) {
				await api.post("error", error);
			}
		},
		async exitMenu() {
			try {
				await api.post("exitMenu");
			} catch (error) {
				await api.post("error", error.message);
			}
		},
	},
};
</script>

<style scoped>
.previewLayout {
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>
