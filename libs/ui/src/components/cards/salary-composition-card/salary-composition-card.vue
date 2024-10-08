<script setup lang="ts">
import {computed} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { SalaryCompositionCardProps } from '../../../types/cards/salary-composition-card';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<SalaryCompositionCardProps>(), {
  type: 'main',
  icon: ['fas', 'money-check'],
  concept: 'Lorem Ipsum',
  currency: 'Colones',
  percent: 100,
  unit: 'Lorem',
  value: 100000,
  labels: {
    concept: 'Label Concepto',
    currency: 'Label Moneda',
    percent: 'Label Porcentaje',
    unit: 'Label Unidad',
    value: 'Label Valor',
  }
});
const formattedPercent = Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(props.percent);
const formattedValue = Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(props.value);

const salaryCompositionCardTypeConfig = {
  'main': {
    subcardClass : 'card--main' ,
    iconClass: 'icon-pill--main'
  },
  'dark-2': {
    subcardClass : 'card--dark-2' ,
    iconClass: 'icon-pill--dark-2'
  },
}
</script>

<template>
  <div class="salary-composition-card">
    <div class="salary-composition-card__content">
      <div>
        <FontAwesomeIcon :icon="icon" :class="salaryCompositionCardTypeConfig[type].iconClass"></FontAwesomeIcon>
      </div>
      <div class="col-span-1 md:col-span-3 lg:col-span-2 self-center">
        <h4>{{labels.concept}}</h4>
        <span>{{concept}}</span>
      </div>
      <div class="self-center">
        <h4>{{labels.currency}}</h4>
        <span>{{currency}}</span>
      </div>
      <div class="self-center">
        <h4>{{labels.percent}}</h4>
        <span>{{formattedPercent}}</span>
      </div>
      <div class="col-span-1 md:col-span-2 self-center">
        <h4>{{labels.unit}}</h4>
        <span>{{unit}}</span>
      </div>
      <div  class="col-span-1 md:col-span-2 self-center">
        <div class="py-2 px-6" :class="salaryCompositionCardTypeConfig[type].subcardClass">
          <h4>{{labels.value}}</h4>
          <span>{{formattedValue}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

.salary-composition-card{
  @apply card p-4;
  h4{
    @apply font-thin text-sm;
  }
  span{
    @apply font-semibold text-sm;
  }
  &__content{
    @apply grid grid-cols-1 md:grid-cols-10 lg:grid-cols-9 gap-4;
  }
}
</style>
