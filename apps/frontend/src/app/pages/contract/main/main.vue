<template>
  <div>
    <h1 class="general-title">
      {{ $t('contract.contractInfo') }}
    </h1>
  </div>

  <div class="card w-full p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4">
      <div class="flex flex-col">
        <span class="general-text">{{ $t('contract.contractName') }}</span>
        <p class="general-title">{{ contractData.name }}</p>
      </div>
      <div class="flex flex-col">
        <span class="general-text">{{
          $t('contract.contractOpeningDate')
        }}</span>
        <p class="general-title">{{ contractData.contractOpeningDate }}</p>
      </div>
      <div class="flex flex-col">
        <span class="general-text">{{ $t('contract.contractType') }}</span>
        <p class="general-title">{{ contractData.contractType }}</p>
      </div>
      <div class="flex flex-col">
        <span class="general-text">{{ $t('contract.contractNumber') }}</span>
        <p class="general-title">{{ contractData.contractNumber }}</p>
      </div>
    </div>
  </div>

  <div>
    <h1 class="general-title pt-10">
      {{ $t('contract.generalInfo') }}
    </h1>
  </div>

  <div class="grid grid-cols-1 gap-10 w-full items-center md:items-start">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
      <JobCard
        v-for="(item, index) in contractData.positions"
        v-bind="item"
        :labels="{
          name: $t('contract.contractPosition'),
          state: $t('contract.contractStatus'),
          schedule: $t('contract.schedule'),
        }"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { JobCard } from '@ventura/ui';
// Definimos los datos en el script del componente
const contractData = reactive({
  name: 'Raúl Venegas Ugalde',
  contractOpeningDate: '01/10/23',
  contractType: 'Permanente',
  contractNumber: 'Contrato #1714',
  positions: [
    {
      name: 'Jefe de Sistemas Informáticos',
      state: 'Activo',
      schedule: 'CH, L-J, 7:30 - 4:30  V, 7:30 - 4:00',
      color: 'main',
    },
    {
      name: 'Ingeniero de Sistemas Informáticos',
      state: 'Activo',
      schedule: 'CH, L-J, 7:30 - 4:30  V, 7:30 - 4:00',
    },
  ],
});
</script>
