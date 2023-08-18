<template>
  <component :is="currentView" />
</template>

<script lang="ts">
import BasicCardView from "./BasicCardView.vue";
import {
  Ref,
  ShallowRef,
  ref,
  shallowRef,
  Component,
  onMounted,
  onUnmounted,
} from "vue";
import { useGlobalStore } from "@/store/global";

interface Handlers {
  [key: string]: (itemData: any) => void;
}

export default {
  name: "Home",
  setup() {
    const currentView: ShallowRef<Component> = shallowRef(BasicCardView);
    const isVisible: Ref<Boolean> = ref(true);
	const globalStore = useGlobalStore();

    const handlers: Handlers = {
      toggleShow: (itemData: any): void => {
        if (itemData.view) {
          return toggleShow(itemData.view);
        }
      },
    };

    const toggleShow = (view: string): void => {
      switch (view) {
        case "base":
          currentView.value = BasicCardView;
          break;
        default:
          break;
      }
      isVisible.value = !isVisible.value;
    };

    const handleMessageListener = (event: MessageEvent): void => {
      const itemData: any = event?.data;
      if (handlers[itemData.type]) handlers[itemData.type](itemData);
    };
	
	const setPlayerID = (id: string) => {
		globalStore.playerID = id;
	} 

    onMounted(() => {
      window.addEventListener("message", handleMessageListener);
    });

    onUnmounted(() => {
      window.removeEventListener("message", handleMessageListener, false);
    });



    return {
      currentView,
	  toggleShow,
	  setPlayerID
    };
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
