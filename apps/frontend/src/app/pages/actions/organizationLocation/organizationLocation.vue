<template>
  <!-- container botones -->
  <div class="submenu-container">
    <a
      class="submenu-container__item btn--small btn--outline"
      href="/contract"
    >
      {{ $t('contract.contractBtn') }}
    </a>
    <a
      class="submenu-container__item btn--small btn--outline"
      href="/asociation"
    >
      {{ $t('contract.asociationBtn') }}
    </a>
    <a
      class="submenu-container__item btn--small"
      href="/organization"
    >
      {{ $t('contract.orgLocationBtn') }}
    </a>
    <a
      class="submenu-container__item btn--small btn--outline"
      href="/payment"
    >
      {{ $t('contract.payMethodBtn') }}
    </a>
  </div>
  <div class="main-container">
    <h1 class="general-title">
      {{ $t('organizationLocation.title') }}
    </h1>
    <div class="grid grid-cols-3 md:grid-cols-12 gap-8 pb-10 w-full">
      <div class="col-span-3 p-5 card items-start" v-for="location in organizationLocationData.locations">
        <div class="flex flex-col">
          <span class="general-text">{{ $t('organizationLocation.description') }}</span>
          <p class="general-title">{{ location.description }}</p>
        </div>
        <br>
        <div class="flex flex-col">
          <span class="general-text">{{ $t('organizationLocation.percentage') }}</span>
          <p class="general-title">{{ location.percentage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
// Definimos los datos en el script del componente
const organizationLocationData = reactive({
 locations:[
  {
    description: 'Depto. Tecnología',
    percentage: '0.00'
  },
  {
    description: 'Adhesivos Lord',
    percentage: '0.00'
  },
  {
    description: 'Adhesivos Henkel',
    percentage: '0.00'
  },
  {
    description: 'Bolsas',
    percentage: '0.00'
  },
  {
    description: 'Cartón',
    percentage: '0.00'
  },
  {
    description: 'Carbonato',
    percentage: '0.00'
  },
  {
    description: 'Master',
    percentage: '0.00'
  },
  {
    description: 'Resina',
    percentage: '0.00'
  },
  {
    description: 'Servicios',
    percentage: '0.00'
  },
  {
    description: 'Goodpack Administrativo',
    percentage: '0.00'
  },
 ]
});
</script>
