import { defineStore } from 'pinia'

export const useLoaded = defineStore({
  id: 'preloader',
  state: () => {
    return {
      isLoaded: false
    }
  },
  actions: {
    loadedEvent() {
      this.isLoaded = true;
    },
  },
})
