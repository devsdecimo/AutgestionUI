<script setup lang="ts">
</script>

<template>
  <div class="min-h-full flex flex-col">
    <nav class="border-b border-gray-200 bg-white">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600">
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="p-10 bg-gray-100 flex-1">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
