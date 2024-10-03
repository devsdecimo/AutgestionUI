<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  //https://mocki.io/v1/fd98a185-411f-47b3-9f51-f10d14c6d9fa
  const response = await fetch('https://mocki.io/v1/fd98a185-411f-47b3-9f51-f10d14c6d9fa');
  const colors = await response.json();

  Object.keys(colors).forEach((key: string) => {
    root.style.setProperty(`--color-${key}`, colors[key]);
  })
})
</script>

<template>
  <component :is="$route.meta.layout ?? 'div'">
    <router-view />
  </component>
</template>

<style scoped></style>
