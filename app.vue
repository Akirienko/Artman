<template>
  <div>
    <AppPreloader v-if="!isLoaded" />
    <AppBackground />
    <AppHeader />
    <NuxtPage />
    <!-- <AudioComponent /> -->
  </div>
</template>


<script setup>
import { useLoaded } from '@/store/preloader'
import { storeToRefs } from 'pinia'

const store = useLoaded();
const { isLoaded } = storeToRefs(store)

onMounted(() => {
  store.loadedEvent();
})

</script>