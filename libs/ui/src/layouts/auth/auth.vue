<script setup lang="ts">
// defineProps<{}>()
</script>

<template>
  <div
    class="bg-gray-100 flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
    data-test="auth-layout"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
