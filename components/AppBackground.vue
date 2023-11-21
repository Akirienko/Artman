<template>
  <div class="main-background">
    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="url(#paint0_linear_2_1287)"/>
      <rect width="100%" height="100%" fill="url(#paint1_radial_2_1287)"/>
      <defs>
      <linearGradient id="paint0_linear_2_1287" x1="814.986" y1="1.16447e-10" x2="814.986" y2="1024" gradientUnits="userSpaceOnUse">
      <stop stop-color="#13161B"/>
      <stop offset="1" stop-color="#171823"/>
      </linearGradient>
      <radialGradient id="paint1_radial_2_1287" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 512) scale(720 24432.2)">
      <stop stop-color="#1A2142"/>
      <stop offset="1" stop-color="#1A2142" stop-opacity="0"/>
      </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-background {
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
}
</style>