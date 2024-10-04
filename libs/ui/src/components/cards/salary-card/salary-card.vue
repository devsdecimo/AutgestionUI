<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { SalaryCardProps } from '../../../types/cards/salary-card';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<SalaryCardProps>(), {
  salaryId: 10,
  currency: 'Colones',
  startDate: '16/02/2024',
  endDate:'29/02/2024',
  docLink: '/ruta-a-mi-doc'
});

const currencyIconConfig = {
  'Colones': {
    icon : ['fas', 'colon-sign'] ,
  },
  'Dólares': {
    icon : ['fas', 'dollar-sign'] ,
  },
}

</script>

<template>
  <div class="salary-card relative">
    <div class="salary-card__content">
      <div class="grid grid-cols-4 sm:grid-cols-5">
        <div class="icon-pill--main col-span-1">
          <FontAwesomeIcon :icon="currencyIconConfig[currency].icon" />
        </div>
        <div class="text-sm text-center sm:text-left col-span-2 sm:col-span-4">
          <div>
            <span class="font-thin text-dark-2">Periodo</span>
          </div>
          <div class="flex flex-col sm:flex-row sm:gap-2">
          <span class="font-semibold text-dark-1">{{startDate}}</span>
          <span class="font-semibold text-dark-1">-</span>
          <span class="font-semibold text-dark-1">{{endDate}}</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-0 mt-10 sm:mt-0">
        <a :href="docLink" class="salary-card__download-btn">
          <FontAwesomeIcon :icon="['fas', 'download']" class="mr-2"></FontAwesomeIcon>Descargar</a>
        <a :href="'/salarios/'+salaryId" class="salary-card__open-btn">Ver Más</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.salary-card{
  @apply card card;
  &__download-btn{
    @apply btn--main flex items-center justify-center;
    @media screen and (min-width:640px) {
      @apply bg-transparent text-main border-none px-0 col-start-2 justify-start !important;
    }
  }
  &__open-btn{
    @apply  btn--main static sm:absolute bottom-6 right-6 flex items-center justify-center;
  }
  &__content{
    @apply card__content space-y-10 sm:space-y-0;
  }
}
</style>
