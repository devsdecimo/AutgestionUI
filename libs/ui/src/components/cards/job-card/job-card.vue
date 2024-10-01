<script setup lang="ts">
import {computed} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { JobCardProps } from '../../../types/cards/job-card';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<JobCardProps>(), {
  name: 'Jefe de Sistemas Informáticos',
  state: 'Activo',
  schedule: 'CH, L-J, 7:30 - 4:30  V, 7:30 - 4:00',
  color: 'dark-2'
});
const iconClass = computed(()=>'icon-pill--'+props.color);
const subcardClass = computed(()=>'card--'+props.color);
</script>

<template>
  <div class="job-card">
    <div class="job-card__content">
      <div class="flex items-center space-x-4">
        <div :class="iconClass">
          <FontAwesomeIcon :icon="['fas', 'fa-user']" />
        </div>
        <div class="text-sm">
          <span class="block font-bold">Puesto</span>
          <span class="block text-dark-4">{{name}}</span>
        </div>
      </div>


      <div class="job-card__cards-container">
        <div :class="subcardClass">
          <div class="job-card__subcard-content">
            <span class="block">Estado de Contrato</span>
            <span class="block font-bold">{{state}}</span>
          </div>
        </div>

        <div :class="subcardClass">
          <div class="job-card__subcard-content">
            <span class="block">Horario Establecido</span>
            <span class="block font-bold">{{schedule}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.job-card{
  @apply  col-span-3 card card--shadow;
  &__content{
    @apply card__content space-y-4;
  }
  &__cards-container{
    @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
  }
  &__subcard-content{
    @apply card__content flex flex-col items-center justify-center text-xs space-y-2 text-sm;
  }
}
</style>
