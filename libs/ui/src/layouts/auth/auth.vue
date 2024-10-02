<script setup lang="ts">
// defineProps<{}>()
</script>

<template>
  <div
    class="bg-gray-100 flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
    data-test="auth-layout"
  >
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[946px]">
      <div class="card p-14 flex justify-center items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            class="mx-auto h-40 w-auto"
            src="src/images/logo-ventura-vertical.png"
            alt="Ventura"
          >
        </div>
        <slot />
        <img
          class="mx-auto h-12 w-auto"
          src="src/images/logo-developers.svg"
          alt="Develope by MDG"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
