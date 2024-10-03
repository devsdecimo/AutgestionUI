<script setup lang="ts">
// defineProps<{}>()
</script>

<template>
  <div
    class="bg-gray-100 flex min-h-full flex-col justify-center items-center py-12 sm:px-6 lg:px-8"
    data-test="auth-layout"
  >
    <div class="mt-10 sm:mx-auto w-11/12 sm:max-w-[730px]">
      <div class="card p-14 flex justify-center items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            class="mx-auto h-40 w-auto mb-10"
            src="src/images/logo-ventura-vertical.png"
            alt="Ventura"
          >
        </div>
        <slot />
        <img
          class="mx-auto h-12 w-auto mb-7 mt-12"
          src="src/images/logo-developers.svg"
          alt="Develope by MDG"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
