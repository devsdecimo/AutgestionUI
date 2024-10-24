<template>
  <!-- container botones -->
  <div class="submenu-container">
    <router-link 
      to="/time" 
      :class="['submenu-container__item', 'btn--small', route.path === '/time' ? '' : 'btn--outline']"
    >
      {{ $t('time.timeRegistration') }}
    </router-link>
    <router-link
      to="/time/records"
      :class="['submenu-container__item', 'btn--small', route.path === '/time/records' ? '' : 'btn--outline']"
    >
      {{ $t('time.timeRecordQuery') }}
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

<style scoped>
</style>
