<template>
  <!-- container botones -->
  <div class="submenu-container">
    <router-link 
      to="/vacations"
      :class="['submenu-container__item', 'btn--small', route.path === '/vacations' ? '' : 'btn--outline']"
    >
      {{ $t('vacation.submenuLabels.vacation') }}
    </router-link>
    <router-link 
      to="/vacations/request"
      :class="['submenu-container__item', 'btn--small', route.path === '/vacations/request' ? '' : 'btn--outline']"
    >
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </router-link>
    <router-link
      to="/vacations/year-report"
      :class="['submenu-container__item', 'btn--small', route.path === '/vacations/year-report' ? '' : 'btn--outline']"
    >
      {{ $t('vacation.submenuLabels.yearReport') }}
    </router-link>
    <router-link
      to="/vacations/resolutions"
      :class="['submenu-container__item', 'btn--small', route.path === '/vacations/resolutions' ? '' : 'btn--outline']"
    >
      {{ $t('vacation.submenuLabels.resolution') }}
    </router-link>
  </div>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'; // Importa useRoute para obtener la ruta actual

// Obtener la ruta actual
const route = useRoute();
</script>


<style scoped lang="postcss">
h2 {
  @apply pb-8;
}
span {
  &.state {
    @apply rounded-2xl p-1 text-center text-white w-20 text-xs;
    @media screen and (max-width: 1024px) {
      @apply absolute top-16 left-4;
    }
  }
}
.information-card {
  @media screen and (max-width: 1024px) {
    @apply card;
    .grid {
      @apply card__content;
    }
  }
}
</style>
