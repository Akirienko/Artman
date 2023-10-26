<template>
  <div>
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

<script setup>

</script>

<style lang="scss" scoped>
.undertitle {
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 4.8px;
  text-transform: uppercase;
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
  }
  @media (min-width: 760px) {
    max-width: 564px;
  }
}
</style>