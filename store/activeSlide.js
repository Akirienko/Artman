import { createPinia } from 'pinia';

export const useActiveSlide = defineStore({
  id: 'slide',
  state: () => {
    return {
      activeMenuItem: 'sectionWelcome',
      activeSlideIndex: 0,
    }
  },
  actions: {
    setActiveMenuItem(item) {
      this.activeMenuItem = item;
    },
    setActiveSlideIndex(index) {
      this.activeSlideIndex = index;
    },
  }
})