<script setup>
  const { locale, setLocale } = useI18n();

  defineProps({
    customClass: String,
  })
  const currentLocale = ref(locale.value);
  const swichLang = (value) => {
    setLocale(value);
    currentLocale.value = value;
  }
</script>

<template>
  <div class="lang-block" :class="customClass">
    <div
      @click="swichLang('en')"
      :class="{ active: currentLocale === 'en' }"
    >
      ENG
    </div>
    /
    <div
      @click="swichLang('ua')"
      :class="{ active: currentLocale === 'ua' }"
      >
      УКР
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-block {
  display: flex;
  margin-right: 20px;
  font-size: 12px;
  color: #7B8699;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  &>div {
    margin: 0 5px;
    cursor: pointer;
    transition: ease-out .5s;
    &.active {
      color: #ECF7FF;
      font-weight: 600;
    }
    &:hover {
      color: #ECF7FF;
    }
  }
}
</style>