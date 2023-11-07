<template>
  <div>
    <Preloader v-if="!isLoaded" />
    <MainBackground />
    <AppHeader />
    <NuxtPage />
    <AudioComponent />
  </div>
</template>


<script setup>
const isLoaded = ref(false);

import { useRoute } from 'vue-router';
const route = useRoute();

watch(() => route.name, () => {
  isLoaded.value = false;
  setTimeout(() => {
    isLoaded.value = true;
    console.log('setTimeout isLoaded', isLoaded.value);
  }, 2500);
});

onMounted(() => {
  isLoaded.value = true;
})

</script>