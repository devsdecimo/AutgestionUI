<script setup lang="ts">
  import { Accordion } from "@ventura/ui";
</script>

<template>
  <div class="p-4">
    <div class="p-4">
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

    <Accordion />
  </div>
</template>
