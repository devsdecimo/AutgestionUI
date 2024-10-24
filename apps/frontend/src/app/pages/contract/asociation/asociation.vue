<template>
  <h1 class="general-title">
    {{ $t('asociation.title') }}
  </h1>
  <div class="grid grid-cols-3 md:grid-cols-12 gap-8 pb-10 w-full">
    <div class="col-span-3 p-5 card items-start">
      <div class="flex flex-col">
        <span class="general-text">{{ $t('asociation.entityLabel') }}</span>
        <p class="general-title">{{ asociationData.entity }}</p>
      </div>
    </div>
    <div class="col-span-3 p-5 card items-start">
      <div class="flex flex-col">
        <span class="general-text">{{ $t('asociation.percentageLabel') }}</span>
        <p class="general-title">{{ asociationData.percentage }}</p>
        <br />
        <p class="font-mulish text-dark-3 text-sm">
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
    <div class="col-span-3 p-5 card items-start">
      <div class="flex flex-col">
        <span class="general-text">{{ $t('asociation.entryDateLabel') }}</span>
        <p class="general-title">{{ asociationData.entryDate }}</p>
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
