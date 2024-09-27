<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="flex justify-center space-x-2">
    <button>Default</button>
    <button class="btn--main">
      Main
    </button>
    <button class="btn--success">
      Success
    </button>
    <button class="btn--warning">
      Warning
    </button>
    <button class="btn--error">
      Danger
    </button>
  </div>
  <div class="flex justify-center mt-5">
    <RouterLink
      to="/login"
      class="text-blue-500"
    >
      <FontAwesomeIcon :icon="fas.faHouse" /> Ir a login
    </RouterLink>
  </div>
</template>

<style scoped></style>
