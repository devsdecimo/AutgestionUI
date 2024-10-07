<template>
  <!-- container botones -->
  <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
    <a class="btn--main btn--small">
      {{ $t('contract.contractBtn') }}
    </a>
    <a 
      class="btn--main btn--small btn--outline whitespace-nowrap"
      href="/asociation"
    >
      {{ $t('contract.asociationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.orgLocationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.payMethodBtn') }}
    </a>
  </div>
  <div class="flex flex-col items-start content-center gap-10 px-6 md:mt-4 mb-12">
    <div>
      <h1 class="font-bold text-base leading-5 pt-10">
        {{ $t('contract.contractInfo') }}
      </h1>
    </div>

    <div
      class="grid grid-cols-1 md:p-20 p-10 bg-white drop-shadow-lg rounded-3xl gap-10 w-full items-center md:items-start"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4">
        <div class="flex flex-col">
          <span class="text-dark-2">{{ $t('contract.contractName') }}</span>
          <p class="text-dark font-bold">{{ contractData.name }}</p>
        </div>
        <div class="flex flex-col">
          <span class="text-dark-2">{{ $t('contract.contractOpeningDate') }}</span>
          <p class="text-dark font-bold">{{ contractData.contractOpeningDate }}</p>
        </div>
        <div class="flex flex-col">
          <span class="text-dark-2">{{ $t('contract.contractType') }}</span>
          <p>{{ contractData.contractType }}</p>
        </div>
        <div class="flex flex-col">
          <span class="text-dark-2">{{ $t('contract.contractNumber') }}</span>
          <p class="text-dark font-bold">{{ contractData.contractNumber }}</p>
        </div>
      </div>
    </div>

    <div>
      <h1 class="font-bold text-base leading-5 pt-10">
        {{ $t('contract.generalInfo') }}
      </h1>
    </div>

    <div
      class="grid grid-cols-1 gap-10 w-full items-center md:items-start"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        <JobCard 
          v-for="item in contractData.positions" 
          v-bind="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { JobCard }  from '@ventura/ui';
// Definimos los datos en el script del componente
const contractData = reactive({
  name: 'Raúl Venegas Ugalde',
  contractOpeningDate: '01/10/23',
  contractType: 'Permanente',
  contractNumber: 'Contrato #1714',
  positions:[
    {
      name: 'Jefe de Sistemas Informáticos',
      state: 'Activo',
      schedule: 'CH, L-J, 7:30 - 4:30  V, 7:30 - 4:00',
      color: 'main'
    },
    {
      name: 'Ingeniero de Sistemas Informáticos',
      state: 'Activo',
      schedule: 'CH, L-J, 7:30 - 4:30  V, 7:30 - 4:00',
    },
  ]
});
</script>
