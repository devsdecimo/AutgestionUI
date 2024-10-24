<template>
  <!-- container botones -->
  <div class="submenu-container">
    <router-link 
      to="/permissions" 
      :class="['submenu-container__item', 'btn--small', route.path === '/permissions' ? '' : 'btn--outline']"
    >
      {{ $t('permissions.applicationBtn') }}
    </router-link>
    <router-link
      to="/permissions/resolutions"
      :class="['submenu-container__item', 'btn--small', route.path === '/permissions/resolutions' ? '' : 'btn--outline']"
    >
      {{ $t('permissions.resolutionBtn') }}
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

