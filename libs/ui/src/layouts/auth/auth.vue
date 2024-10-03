<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
import { ActionsDropdown } from '@ventura/ui';

const languageActions = [
  {
    label: 'Español',
    clickHandler: () => {
      locale.value = 'es';
      localStorage.setItem('user-locale', 'es');
    }
  },
  {
    label: 'English',
    clickHandler: () => {
      locale.value = 'en';
      localStorage.setItem('user-locale', 'en');
    }
  }
];
// defineProps<{}>()
</script>

<template>
  <div
    class="bg-gray-100 flex min-h-full flex-col justify-center items-center py-12 sm:px-6 lg:px-8"
    data-test="auth-layout"
  >
  <ActionsDropdown :actions="languageActions" :dropdownLabel="$t('misc.language')"/>
    <div class="mt-10 sm:mx-auto w-11/12 sm:max-w-[730px]">
      <div class="card p-14 flex justify-center items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            class="mx-auto h-40 w-auto"
            src="src/images/logo-ventura-vertical.png"
            alt="Ventura"
          >
        </div>
        <slot />
        <img
          class="mx-auto h-12 w-auto"
          src="src/images/logo-developers.svg"
          alt="Develope by MDG"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
