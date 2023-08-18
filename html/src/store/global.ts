// Utilities
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    playerID: "123"
  }),
  getters: {
    playerID(state) {
      return state.playerID
    }
  }
})
