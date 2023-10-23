import { defineStore } from 'pinia'

export const useAudioStore = defineStore({
  id: 'audio',
  state: () => {
    return {
      isPlaying: true,
      // audio: ref(null)
    }
  },
  actions: {
    playSong() {
      this.isPlaying = true;
      audio.value.play();
    },
    pauseSong() {
      this.isPlaying = false;
      audio.value.pause();
    },
  },
  // getters: {
  //   getAudio() {
  //     return this.audio
  //   },
  // },
})
