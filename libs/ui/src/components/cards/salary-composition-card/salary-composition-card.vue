<script setup lang="ts">
import {computed} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { SalaryCompositionCardProps } from '../../../types/cards/salary-composition-card';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<SalaryCompositionCardProps>(), {
  type: 'main',
  icon: ['fas', 'money-check'],
  concept: 'Salario Base Contrato',
  currency: 'Colones',
  percent: 100,
  unit: 'Mensual',
  value: 100000
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
        <h4>Concepto</h4>
        <span>{{concept}}</span>
      </div>
      <div class="self-center">
        <h4>Moneda</h4>
        <span>{{currency}}</span>
      </div>
      <div class="self-center">
        <h4>Porcentaje</h4>
        <span>{{formattedPercent}}</span>
      </div>
      <div class="col-span-1 md:col-span-2 self-center">
        <h4>Unidad de Pago</h4>
        <span>{{unit}}</span>
      </div>
      <div  class="col-span-1 md:col-span-2 self-center">
        <div class="py-2 px-6" :class="salaryCompositionCardTypeConfig[type].subcardClass">
          <h4>Valor</h4>
          <span>{{formattedValue}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

.salary-composition-card{
  @apply card--shadow p-4;
  h4{
    @apply font-thin text-sm;
  }
  span{
    @apply font-semibold text-sm;
  }
  &__content{
    @apply grid grid-cols-1 md:grid-cols-10 lg:grid-cols-9 gap-4;
  }
  /*
  &__cards-container{
    @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
  }
  &__subcard-content{
    @apply card__content flex flex-col items-center justify-center text-xs space-y-2 text-sm;
  }*/
}
</style>
