<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  // const response = await fetch('https://mocki.io/v1/fd98a185-411f-47b3-9f51-f10d14c6d9fa');
  // const response = await fetch('https://mocki.io/v1/26044cc3-f3f9-4be5-8e82-0966c12ff86f');
  // const response = await fetch('https://mocki.io/v1/53e5b96e-4d33-4a03-b082-1a81680002ad');
  const response = await fetch('https://mocki.io/v1/8797b462-26f4-46be-82a3-93a19b4a07d2');
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
