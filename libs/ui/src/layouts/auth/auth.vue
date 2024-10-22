<script setup lang="ts">
// defineProps<{}>()
import logoDev from '../../images/logo-developers.svg';
import logoVert from '../../images/logo-ventura-vertical.png';
</script>

<template>
  <div
    class="bg-gray-100 flex min-h-full flex-col justify-center items-center md:py-12 sm:px-6 lg:px-8"
    data-test="auth-layout"
  >
    <div class="mt-4 md:mt-10 sm:mx-auto w-11/12 sm:max-w-[730px]">
      <div class="card px-2 py-6 md:p-14 flex justify-center items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            class="mx-auto md:h-40 h-28 w-auto md:mb-10 mb-6"
            :src="logoVert"
            alt="Ventura"
          >
        </div>
        <slot />
        <img
          class="mx-auto h-12 w-auto mb-7 mt-12"
          :src="logoDev"
          alt="Develope by MDG"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
