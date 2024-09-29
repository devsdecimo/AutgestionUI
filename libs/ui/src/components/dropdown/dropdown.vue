<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Types
import type { DropdownProps, DropdownOption } from '../../types/dropdown';

const props = defineProps<DropdownProps>();
const emit = defineEmits(['onOptionSelected']);

const dropdown = ref(null);
const isOpen = ref(false);
const selected = ref<DropdownOption>(props.value || props.options[0]);

const toggleDropdown = () => isOpen.value = !isOpen.value;

onClickOutside(dropdown, () => isOpen.value = false);

const selectOption = (option: DropdownOption) => {
  selected.value = option;
  isOpen.value = false;
  emit('onOptionSelected', option);
}
</script>

<template>
  <div
    ref="dropdown"
    class="dropdown"
    :class="{
      'select--with-icon': !!icon
    }"
  >
    <FontAwesomeIcon
      v-if="!!icon"
      :icon="['fas', 'fa-dollar-sign']"
    />

    <div
      class="select--main"
      @click="toggleDropdown"
    >
      {{ selected.label }}
    </div>

    <div
      v-if="isOpen"
      class="dropdown__menu-holder"
    >
      <ul class="dropdown__menu">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="dropdown__menu-item"
          :class="{ active: option.value === selected.value }"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.dropdown {
  @apply relative;

  &__menu-holder {
    @apply absolute z-10 mt-2 w-full overflow-hidden card card--shadow;
  }

  &__menu {
    @apply overflow-x-auto py-2 max-h-[200px];

    &-item {
      @apply px-4 py-2 cursor-pointer hover:bg-light-2 text-sm;

      &.active {
        @apply bg-light-2;
      };
    }
  }
}
</style>
