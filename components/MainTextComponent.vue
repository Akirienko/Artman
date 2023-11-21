<script setup>
const props = defineProps({
  image: String
})
</script>

<template>
  <div>
    <div class="a-symbol">
      <slot name="image"></slot>
    </div>
    <span class="undertitle">
      <slot name="undertitle"></slot>
    </span>
    <h1 class="title">
      <slot name="title"></slot>
    </h1>
    <p class="subtitle">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>

.a-symbol {
  position: absolute;
  width: 220px;
  top: -70px;
  left: -100px;
}
.undertitle {
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  opacity: .7;
  @media (min-width: 760px) {
    font-size: 14px;
  }
}
.title {
  font-size: 28px;
  line-height: 140%;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  margin: 12px 0;
  max-width: 550px;
  span {
    font-weight: 300;
  }
  @media (min-width: 760px) {
    font-size: 48px;
  }
}
.subtitle {
  font-size: 17px;
  line-height: 180%;
  letter-spacing: 1.7px;
  opacity: .7;
  max-width: 343px;
  @media (min-width: 760px) {
    font-size: 24px;
    letter-spacing: 2.4px;
    max-width: 564px;
  }
}
</style>