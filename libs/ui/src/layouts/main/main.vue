<script setup lang="ts">
import { useTemplateRef } from 'vue';

// Components
import SideMenu from '../../components/side-menu/side-menu.vue';
import TopBar from '../../components/top-bar/top-bar.vue';

// Types
import type { SideMenuLinks } from '../../types/side-menu';

const sideMenuLinks: SideMenuLinks[] = [
  { text: 'General', icon: ['fas', 'home'], route: '/' },
  { text: 'Mi Perfil', icon: ['fas', 'user'], route: '/profile' },
  { text: 'Acciones', icon: ['fas', 'clipboard'], route: '/actions' },
  { text: 'Vacaciones', icon: ['fas', 'plane'], route: '/vacations' },
  { text: 'Permisos', icon: ['fas', 'calendar-check'], route: '/permissions'},
  { text: 'Salarios', icon: ['fas', 'money-bill'], route: '/salaries'},
  { text: 'Gestiones', icon: ['fas', 'tasks'], route: '/requests'},
  { text: 'Tiempo', icon: ['fas', 'clock'], route: '/time' },
];

const mobileSideMenu = useTemplateRef<typeof SideMenu>('mobile-side-menu')
</script>

<template>
  <div class="layout">
    <aside>
      <SideMenu :links="sideMenuLinks" />
    </aside>

    <main>
      <header>
        <TopBar
          :is-mobile-menu-visible="mobileSideMenu?.isCollapsed"
          @click="mobileSideMenu?.toggleMenu()"
        />
        <div class="side-menu__mobile-container">
          <SideMenu
            ref="mobile-side-menu"
            :is-mobile="true"
            :links="sideMenuLinks"
          />
        </div>
      </header>

      <section>
        <slot />
      </section>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  @apply flex h-full overflow-hidden;

  aside {
    @apply hidden sm:block border-r border-light;
  }

  header {
    @apply relative;

    .side-menu__mobile-container {
      @apply sm:hidden h-screen absolute top-[80px] z-10;
    }
  }

  main {
    @apply h-full grow flex flex-col;

    section {
      @apply flex-1 overflow-y-auto bg-light-4 p-10;
    }
  }
}
</style>
