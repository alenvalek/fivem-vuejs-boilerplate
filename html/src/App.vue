<template>
  <v-app theme="dark" v-if="isVisible">
    <component :is="currentView" />
  </v-app>
</template>

<script lang="ts">
import BasicCardView from "./views/BasicCardView.vue";
import {
  Ref,
  ShallowRef,
  ref,
  shallowRef,
  Component,
  onMounted,
  onUnmounted,
} from "vue";
import { useGlobalStore } from "./store/global";

interface Handlers {
  [key: string]: (itemData: any) => void;
}

export default {
  name: "App",
  setup() {
    const currentView: ShallowRef<Component> = shallowRef(BasicCardView);
    const isVisible: Ref<Boolean> = ref(false);
    const globalStore = useGlobalStore();

    const handlers: Handlers = {
      toggleShow: (itemData: any): void => {
        if (itemData.payload?.length > 0 && itemData.payload[0]) {
          return toggleShow(itemData.payload[0]);
        }else {
          return toggleShow();
        }
      },
      setPlayerID: (itemData: any): void => {
        if(itemData.data) {
          return setPlayerID(itemData.data)
        } else {
          return
        }
      }
    };

    const toggleShow = (view: string = ""): void => {
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
      globalStore.$state.playerID = id;
    };

    onMounted(() => {
      window.addEventListener("message", handleMessageListener);
    });

    onUnmounted(() => {
      window.removeEventListener("message", handleMessageListener, false);
    });

    return {
      currentView,
      isVisible,
      toggleShow,
      setPlayerID,
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
