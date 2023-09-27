<template>
  <audio
    autoplay
    controls
    loop
    ref="audio"
    id="audio"

  >
    <source src="@/assets/sounds/mainSong.mp3" type="audio/mpeg">
    Your browser does not support the audio tagю
  </audio>

  <button @click="playHandler" class="toggle-sound">PLAY</button>
  <button @click="pauseHandler" class="toggle-sound">Pause</button>
</template>

<script setup>
// import { EventHub } from "../eventHub";

const audio = ref(null);

const playHandler = () => {
  if (audio.value.paused) {
    audio.value.play();
  }
};

const pauseHandler = () => {
  if (!audio.value.paused) {
    audio.value.pause();
  }
};

provide('playHandler', playHandler);
provide('pauseHandler', pauseHandler);

// EventHub.emit("play-audio", playHandler);
// EventHub.emit("pause-audio", pauseHandler);


</script>

