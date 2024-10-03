<template>
  <div class="relative inline-block text-left">
    <!-- Botón principal que muestra el label -->
    <button @click="toggleDropdown" class="flex items-center space-x-2 text-main hover:text-info font-bold">
      <span>{{ dropdownLabel }}</span>
      <!-- Uso del componente FontAwesomeIcon para mostrar la flecha -->
      <FontAwesomeIcon :icon="icon" class="text-base" />
    </button>

    <!-- Dropdown que aparece al hacer clic -->
    <div
      v-if="isDropdownOpen"
      class="absolute mt-2 w-32 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
    >
      <ul class="py-1">
        <li v-for="(action, index) in actions" :key="index" class="block w-full">
          <template v-if="action.clickHandler">
            <button
              @click="handleClick(action)"
              class="block w-full text-left px-4 py-2 text-sm text-dark hover:bg-light-2 hover:text-info"
            >
              {{ action.label }}
            </button>
          </template>
          <template v-else-if="action.href">
            <a
              :href="action.href"
              class="block w-full text-left px-4 py-2 text-sm text-dark hover:bg-light-2 hover:text-info"
            >
              {{ action.label }}
            </a>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
  dropdownLabel: {
    type: String,
    default: 'Actions',
  },
  actions: {
    type: Array,
    required: true,
  },
  icon: {
    type: Array,
    default: ['fas', 'chevron-down'],
  }
});

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClick = (action: { clickHandler?: Function }) => {
  if (action.clickHandler) {
    action.clickHandler(); 
  }
  isDropdownOpen.value = false;
};
</script>

<style scoped>
</style>
