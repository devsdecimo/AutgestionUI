<template>
  <!-- container botones -->
  <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
    <a
      class="btn--main btn--small btn--outline whitespace-nowrap"
      href="/contract"
    >
      {{ $t('contract.contractBtn') }}
    </a>
    <a class="btn--main btn--small whitespace-nowrap">
      {{ $t('contract.asociationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.orgLocationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.payMethodBtn') }}
    </a>
  </div>
  <div class="p-4 md:p-10">
    <div class="col-span-12 p-2">
      <h1 class="font-bold text-base leading-5">
        {{ $t('organizationLocation.title') }}
      </h1>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-12 gap-8 py-10">
      <div class="col-span-3 p-5 card items-start" v-for="location in organizationLocationData.locations">
        <div class="flex flex-col">
          <span class="text-dark-2">{{ $t('organizationLocation.description') }}</span>
          <p class="text-dark font-bold">{{ location.description }}</p>
        </div>
        <br>
        <div class="flex flex-col">
          <span class="text-dark-2">{{ $t('organizationLocation.percentage') }}</span>
          <p class="text-dark font-bold">{{ location.percentage }}</p>
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