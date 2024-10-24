<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  // const response = await fetch('https://mocki.io/v1/7ee0910e-5f7d-4c97-87cf-ebbcab39b2ca');
  // const response = await fetch('https://mocki.io/v1/28bdb922-77ac-4c58-831b-b446ab01f133');
  const response = await fetch('https://mocki.io/v1/f720a7e7-b6d7-49b6-b997-2babd0a2ad95');
  const settings = await response.json();
  const colors = settings.colors;

  Object.keys(colors).forEach((key: string) => {
    root.style.setProperty(`--color-${key}`, colors[key]);
  });

  localStorage.setItem('dateFormat', settings.date.format);
  localStorage.setItem('datePlaceholder', settings.date.placeholder);
});
</script>

<template>
  <component :is="$route.meta.layout ?? 'div'">
    <router-view />
  </component>
</template>

<style scoped></style>
