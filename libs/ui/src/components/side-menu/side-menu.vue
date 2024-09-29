<script lang="ts" setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Types
import type { SideMenuProps } from '../../types/side-menu';

const props = defineProps<SideMenuProps>()

const isCollapsed = ref(props.isMobile);
const toggleMenu = () => isCollapsed.value = !isCollapsed.value;

defineExpose({
  isCollapsed,
  toggleMenu
})
</script>

<template>
  <div
    class="side-menu"
    :class="{
      'collapsed': isCollapsed,
      'mobile': isMobile
    }"
  >
    <div
      v-if="!isMobile"
      class="side-menu__header"
    >
      <img
        v-if="!isCollapsed"
        src="../../images/logo-ventura.svg"
        class="h-[30px]"
        alt="Ventura | Nómina 365"
      >
      <button @click="toggleMenu">
        <FontAwesomeIcon :icon="isCollapsed ? ['fas', 'bars'] : ['fas', 'times']" />
      </button>
    </div>

    <div
      v-if="isMobile"
      class="side-menu__header--mobile"
    >
      <span><strong>TODO</strong>: Add mobile display with search.</span>
    </div>

    <div
      v-if="!isCollapsed"
      class="side-menu__navigation"
    >
      <ul>
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <RouterLink
            :to="link.route"
            class="side-menu__navigation-item group"
          >
            <FontAwesomeIcon
              :icon="link.icon"
              class="side-menu__navigation-item-icon"
            />
            <span v-if="!isCollapsed">
              {{ link.text }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div
      v-if="!isCollapsed && !isMobile"
      class="side-menu__footer"
    >
      <button class="side-menu__footer-link">
        <FontAwesomeIcon :icon="['fas', 'sign-out-alt']" />
        <span>Cerrar Sesión</span>
      </button>
      <img
        src="../../images/logo-developers.svg"
        alt="Footer Logo"
      >
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.side-menu {
  @apply min-w-[250px] w-[250px] bg-white h-full flex flex-col transition-all duration-300 ease-in-out;

  &__header {
    @apply min-h-[100px] flex items-center justify-center mb-8 relative;

    button {
      @apply absolute text-main right-[25px];

      svg {
        @apply h-[25px]
      }
    }

    &--mobile {
      @apply bg-error-light text-white p-10 text-xs text-center;
    }
  }

  &__navigation {
    @apply flex-1 space-y-1 mt-4 overflow-y-auto;

    &-item {
      @apply h-[60px] pl-[35px] relative flex items-center font-bold text-dark-3 space-x-4;

      &:hover {
        @apply text-main;
      }

      &-icon {
        @apply h-[25px]
      }

      &.router-link-active {
        @apply text-main;

        &::before {
          content: '';
          @apply absolute left-0 h-full w-1 bg-main rounded-tr rounded-br;
        }
      }
    }
  }

  &__footer {
    @apply flex flex-col items-center space-y-4 py-10;

    &-link {
      @apply flex items-center text-lg font-medium text-dark-3 hover:text-error space-x-6;
    }
  }

  &.collapsed {
    @apply min-w-[75px] w-[75px];

    .side-menu__header {

      button {
        @apply right-auto;

        svg {
          @apply h-[20px]
        }
      }
    }
  }

  &.mobile {
    @apply min-w-[250px] w-[250px];

    .side-menu__navigation-item {

        &.router-link-active {

          &::before {
            @apply hidden;
          }
        }
    }

    &.collapsed {
      @apply hidden;
    }
  }
}
</style>
