<template>
  <div class="relative">
    <!-- Input de tipo password -->
    <input
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      class="password-input"
      v-bind="$attrs"
    >

    <button type="button" @click="togglePasswordVisibility" class="password-toggle">
      <FontAwesomeIcon :icon="['fas', showPassword ? 'fa-eye-slash' : 'fa-eye']" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
});

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped lang="scss">
@import '@fortawesome/fontawesome-free/css/all.min.css';

.password-input {
  &:disabled {
    @apply bg-light text-dark-4 cursor-not-allowed;
  }

  &::placeholder {
    @apply text-dark-3;
  }
}

.password-toggle {
  @apply absolute right-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-dark-3;
}
</style>
