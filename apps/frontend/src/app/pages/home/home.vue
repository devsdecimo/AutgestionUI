<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center space-x-2">
    <button>Default</button>
    <button class="btn--primary">
      Primary
    </button>
    <button class="btn--success">
      Success
    </button>
    <button class="btn--warning">
      Warning
    </button>
    <button class="btn--danger">
      Danger
    </button>
  </div>
  <div class="flex justify-center mt-5">
    <RouterLink
      to="/login"
      class="text-blue-500"
    >
      Ir a login
    </RouterLink>
  </div>
</template>

<style scoped></style>
