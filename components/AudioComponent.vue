<template>
  <audio
    autoplay
    controls
    loop
    ref="audio"
    id="audio"
    style="display:none"
  >
    <source src="@/assets/sounds/mainSong.mp3" type="audio/mpeg">
    Your browser does not support the audio tagю
  </audio>

  <button @click="toggleSound" class="toggle-sound">PLAY</button>
</template>

<script setup>

// const audioRef = ref(null);

// const toggleSound = () => {
//   let audio = audioRef.value;
//   if (audio && audio.paused) {
//     audio.play();
//   } else if (audio) {
//     audio.pause();
//   }
// }

</script>

