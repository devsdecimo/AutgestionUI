<template>
  <h1 class="general-title">
    {{ $t('organizationLocation.title') }}
  </h1>
  <div class="grid grid-cols-3 md:grid-cols-12 gap-8 pb-10 w-full">
    <div
      v-for="(location, index) in organizationLocationData.locations"
      :key="index"
      class="col-span-3 p-5 card items-start"
    >
      <div class="flex flex-col">
        <span class="general-text">{{
          $t('organizationLocation.description')
        }}</span>
        <p class="general-title">{{ location.description }}</p>
      </div>
      <br />
      <div class="flex flex-col">
        <span class="general-text">{{
          $t('organizationLocation.percentage')
        }}</span>
        <p class="general-title">{{ location.percentage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
// Definimos los datos en el script del componente
const organizationLocationData = reactive({
  locations: [
    {
      description: 'Depto. Tecnología',
      percentage: '0.00',
    },
    {
      description: 'Adhesivos Lord',
      percentage: '0.00',
    },
    {
      description: 'Adhesivos Henkel',
      percentage: '0.00',
    },
    {
      description: 'Bolsas',
      percentage: '0.00',
    },
    {
      description: 'Cartón',
      percentage: '0.00',
    },
    {
      description: 'Carbonato',
      percentage: '0.00',
    },
    {
      description: 'Master',
      percentage: '0.00',
    },
    {
      description: 'Resina',
      percentage: '0.00',
    },
    {
      description: 'Servicios',
      percentage: '0.00',
    },
    {
      description: 'Goodpack Administrativo',
      percentage: '0.00',
    },
  ],
});
</script>
