<template>
  <v-app theme="dark" v-if="isVisible">
    <component :is="currentView" />
  </v-app>
</template>
<script setup>
import { ref, shallowRef, onMounted, onUnmounted } from "vue";
import { useGlobalStore } from "./stores/global";
import BasicCardView from "./views/BasicCardView.vue";

const currentView = shallowRef(BasicCardView);
const isVisible = ref(false);
const globalStore = useGlobalStore();

const toggleShow = (view = "") => {
  switch (view) {
    case "base":
      currentView.value = BasicCardView;
      break;
    default:
      break;
  }
  isVisible.value = !isVisible.value;
};

const setPlayerID = (id) => {
  globalStore.$state.playerID = id;
};

const handlers = {
  toggleShow: (itemData) => {
    if (itemData.payload?.length > 0 && itemData.payload[0]) {
      toggleShow(itemData.payload[0]);
    } else {
      toggleShow();
    }
  },
  setPlayerID: (itemData) => {
    if (itemData.data) {
      setPlayerID(itemData.data);
    }
  },
};

const handleMessageListener = (event) => {
  const itemData = event?.data;
  if (handlers[itemData.type]) handlers[itemData.type](itemData);
};

onMounted(() => {
  window.addEventListener("message", handleMessageListener);
});

onUnmounted(() => {
  window.removeEventListener("message", handleMessageListener);
});
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  display: inline !important;
}
.v-application {
  background: rgb(0, 0, 0, 0.5) !important;
}

:root {
  color-scheme: none !important;
}
</style>
