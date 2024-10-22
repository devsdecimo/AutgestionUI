<template>
  <div
    class="main-container"
  >
    <div>
      <h1 class="general-title pb-6">
        {{ $t('salaries.title') }}
      </h1>
      <h2 class="general-text">
        {{ $t('salaries.searchOptions') }}
      </h2>
    </div>

    <div class="card w-full p-6">
      <form class="filter-form" @submit.prevent="handleSubmit">
        <div
          class=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative"
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
                <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="form.startDate" />
          </div>
          <div class="flex flex-col">
            <label>{{ $t('salaries.endDate') }}</label>
                <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="endDate" name="endDate" v-model="form.endDate" />
          </div>

          <div class="right-0 bottom-0 lg:absolute text-center">
            <button
              type="submit"
              class="btn--main font-semibold"
            >
              {{ $t('salaries.search') }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 gap-10 w-full items-center md:items-start">
      <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
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
import { SalaryCard, FormattableDateField } from '@ventura/ui';

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

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

