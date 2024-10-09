<template>
  <div
    class="flex flex-col items-start content-center gap-10 px-6 md:mt-4 mb-12"
  >
    <div>
      <h1 class="font-bold text-base leading-5 pt-10">
        {{ $t('salaries.title') }}
      </h1>
    </div>

    <div>
      <h2 class="font-bold text-base leading-2 text-dark-4">
        {{ $t('salaries.searchOptions') }}
      </h2>
    </div>

    <div class="card w-full p-6">
      <form @submit.prevent="handleSubmit">
        <div
          class="card__content grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          <div class="flex flex-col">
            <label>{{ $t('salaries.period') }}</label>
            <select class="select h-full" v-model="form.period">
              <option value="" hidden>
                {{ $t('salaries.selectAnOption') }}
              </option>
              <option
                v-for="(option, index) in periodOptions"
                :key="index"
                :value="option"
              >
                {{ $t('vacationRequest.stateOptions.' + option) }}
              </option>
            </select>
          </div>
          <div class="flex flex-col">
            <label>{{ $t('salaries.startDate') }}</label>
            <input type="date" v-model="form.startDate" />
          </div>
          <div class="flex flex-col">
            <label>{{ $t('salaries.endDate') }}</label>
            <input type="date" v-model="form.endDate" />
          </div>

          <div class="lg:col-start-2 xl:col-start-4 grid grid-cols-2">
            <button
              type="submit"
              class="btn--main btn--small col-start-2 font-semibold py-2 leading-1"
            >
              {{ $t('salaries.search') }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 gap-10 w-full items-center md:items-start">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        <SalaryCard 
          v-for="(item, index) in salariesData.salaries" 
          v-bind="item" 
          :key="index"
          :labels="{
            period: $t('salaries.period'),
            seeMore: $t('salaries.seeMore'),
            download: $t('salaries.download'),
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { SalaryCard } from '@ventura/ui';
// Definimos los datos en el script del componente
const salariesData = reactive({
  salaries: [
    {
      salaryId: 0,
      currency: 'Colones',
      startDate: '16/02/2024',
      endDate: ' 29/02/2024',
      docLink: '#',
    },
    {
      salaryId: 1,
      currency: 'Colones',
      startDate: '16/02/2024',
      endDate: ' 29/02/2024',
      docLink: '#',
    },
    {
      salaryId: 2,
      currency: 'Dólares',
      startDate: '16/02/2024',
      endDate: ' 29/02/2026',
      docLink: '#',
    }
  ],
});

//Variables reactivas
const searchData = ref(null);
const form = ref({
  period: '',
  startDate: null,
  endDate: null,
});

// Función que se ejecuta al enviar el formulario (Busqueda por Empleado)
const handleSubmit = () => {
  let result = null;
  for (let i = 0; i < salariesData.length; i++) {
    if (salariesData[i].name === form.value.name) {
      result = salariesData[i];
    }
  }
  if (result) {
    searchData.value = result;
  }
};
</script>
