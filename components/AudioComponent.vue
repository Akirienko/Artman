<template>
  <audio
    autoplay
    controls
    loop
    ref="audio"
    id="audio"
  >
    <source src="@/assets/sounds/mainSong.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>
</template>

<script setup>
import { useAudioStore } from '@/store/audio'
import { storeToRefs } from 'pinia'

const store = useAudioStore();
const audio = ref(store.audio);

const { isPlaying } = storeToRefs(store)

console.log('audio curr time', audio.duration);

watch(isPlaying, (newValue, oldValue) => {
  console.log(`playing is: ${newValue}`);
  if (newValue) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
});

</script>

<style scoped>
audio {
  display: none;
}
</style>

