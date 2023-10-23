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

  <button @click="playHandler" class="toggle-sound">PLAY</button>
  <button @click="pauseHandler" class="toggle-sound">Pause</button>
</template>

<script setup>
import { useAudioStore } from '@/store/audio'
import { storeToRefs } from 'pinia'

// const audio = ref(null);

const store = useAudioStore();
const audio = ref(store.audio);
const isPlaying = ref(store.isPlaying);

watch(isPlaying, (newValue, oldValue) => {
  console.log(`playing is: ${newValue}`);
  if (newValue) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
});

const playHandler = () => {
  store.playSong();
};

const pauseHandler = () => {
  store.pauseSong();
};


// const playHandler = () => {
//   store.playSong();
//   console.log('store', store.isPlaying);
//   if (audio.value.paused) {
//     audio.value.play();
//   }
// };

// const pauseHandler = () => {
//   store.pauseSong();
//   console.log('store', store.isPlaying);
//   if (!audio.value.paused) {
//     audio.value.pause();
//   }
// };

// watch(isPlaying, (newValue, oldValue) => {
//   console.log(`playing is: ${newValue}`);
//   if (isPlaying.value) {
//     audio.value.play();
//   }
// });

// watchEffect(() => {
//   console.log(`playing is: ${isPlaying.value}`);
// });




</script>

