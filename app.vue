<template>
  <div>
    <AppPreloader v-if="!isLoaded" />
    <AppBackground />
    <AppHeader />
    <NuxtPage />
    <AudioComponent />
  </div>
</template>


<script setup>
import { useLoaded } from '@/store/preloader'
import { storeToRefs } from 'pinia'

const store = useLoaded();
const { isLoaded } = storeToRefs(store)

// onMounted(() => {
//   store.loadedEvent();
// })

onMounted(() => {
  if (document.readyState === 'complete') {
    store.loadedEvent();
  } else {
    window.addEventListener('load', () => {
      store.loadedEvent();
    })
  }
})

</script>