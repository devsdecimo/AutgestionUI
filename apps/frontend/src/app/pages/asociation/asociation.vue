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
  <div
    class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 content-center gap-10 px-6 md:mt-4 mb-12"
  >
    <div class="col-span-3 p-5 card items-center md:items-start">
      <div class="flex flex-col">
        <span class="text-dark-2">{{ $t('asociation.entityLabel') }}</span>
        <p class="text-dark font-bold">{{ asociationData.entity }}</p>
      </div>
    </div>
    <div class="col-span-3 p-5 card items-center md:items-start">
      <div class="flex flex-col">
        <span class="text-dark-2">{{ $t('asociation.percentageLabel') }}</span>
        <p class="text-dark font-bold">{{ asociationData.percentage }}</p>
        <br>
        <p>
          <span
            :class="
              asociationData.percentagePhase == 'up'
                ? 'text-success'
                : 'text-error'
            "
          >
            <FontAwesomeIcon
              :icon="[
                'fas',
                asociationData.percentagePhase == 'up'
                  ? 'fa-arrow-trend-up'
                  : 'fa-arrow-trend-down',
              ]"
            />
            {{ asociationData.percentagePhaseNumber }}
          </span>
          {{ asociationData.percentagePhaseLabel }}
        </p>
      </div>
    </div>
    <div class="col-span-3 p-5 card items-center md:items-start">
      <div class="flex flex-col">
        <span class="text-dark-2">{{ $t('asociation.entryDateLabel') }}</span>
        <p class="text-dark font-bold">{{ asociationData.entryDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Definimos los datos en el script del componente
const asociationData = reactive({
  entity: 'Asociación de empleados',
  percentage: '5.00',
  percentagePhase: 'up',
  percentagePhaseNumber: '1.3%',
  percentagePhaseLabel: 'Up from past week',
  entryDate: '01/08/20',
});
</script>
