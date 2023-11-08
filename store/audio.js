import { defineStore } from 'pinia'

export const useAudioStore = defineStore({
  id: 'audio',
  state: () => {
    return {
      isPlaying: false,
      currentTime: 0,
      timer: null,
      fullTime: 125
    }
  },
  actions: {
    playSong() {
      this.isPlaying = true;
      this.startTimer();
    },
    pauseSong() {
      this.isPlaying = false;
      this.stopTimer();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime++;
        if (this.currentTime >= 125) {
          this.currentTime=0
        }
      }, 1000);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  },
})
