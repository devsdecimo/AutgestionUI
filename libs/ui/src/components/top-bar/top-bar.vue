<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
import { ActionsDropdown } from '@ventura/ui';

defineProps({
  isMobileMenuVisible: Boolean
});

const emit = defineEmits(['onToggleClick']);




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
</script>

<template>
  <div class="top-bar">
    <div class="top-bar__mobile">
      <button
        class="top-bar__mobile__side-menu-toggle"
        @click="emit('onToggleClick')"
      >
        <FontAwesomeIcon :icon="isMobileMenuVisible ? ['fas', 'bars'] : ['fas', 'times']" />
      </button>

      <img
        src="../../images/logo-ventura.svg"
        alt="Ventura | Nómina 365"
      >
    </div>

    <div class="top-bar__desktop ">
      <h1 class="inline-flex">
        {{ $route.meta.title }}
      </h1>
      <ActionsDropdown :actions="languageActions" :dropdownLabel="$t('misc.language')"/>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.top-bar {
  @apply min-h-[80px] sm:min-h-[100px] border-b border-light flex items-center px-10;

  &__mobile {
    @apply sm:hidden w-full relative flex items-center justify-center;

    &__side-menu-toggle {
      @apply absolute -left-4 text-main;

      svg {
        @apply h-[20px];
      }
    }
  }

  &__desktop {
    @apply hidden sm:flex w-full justify-between;

    h1 {
      @apply text-main text-2xl font-bold;
    }
  }
}
</style>
