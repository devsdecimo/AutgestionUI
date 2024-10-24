<template>
  <!-- container botones -->
  <div class="submenu-container">
    <router-link 
      to="/contract"
      :class="['submenu-container__item', 'btn--small', route.path === '/contract' ? '' : 'btn--outline']"
    >
      {{ $t('contract.contractBtn') }}
    </router-link>
    <router-link
      to="/contract/asociation"
      :class="['submenu-container__item', 'btn--small', route.path === '/contract/asociation' ? '' : 'btn--outline']"
    >
      {{ $t('contract.asociationBtn') }}
    </router-link>
    <router-link
      to="/contract/organization"
      :class="['submenu-container__item', 'btn--small', route.path === '/contract/organization' ? '' : 'btn--outline']"
    >
      {{ $t('contract.orgLocationBtn') }}
    </router-link>
    <router-link
      to="/contract/payment"
      :class="['submenu-container__item', 'btn--small', route.path === '/contract/payment' ? '' : 'btn--outline']"
    >
      {{ $t('contract.payMethodBtn') }}
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
