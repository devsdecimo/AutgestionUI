<script setup lang="ts">
import { useRoute } from 'vue-router';
import { formatDateToString } from '../../../utils/dateUtils';
import { currencyIconConfig } from '../../../utils/currencyIconConfig';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const route = useRoute();
//Data
const salaryData = {
  startDate: '2024-03-01',
  endDate: '2024-03-15',
  concept: 'Salario Ordinario Quincenal',
  calculationBasis: 'Horas',
  income: '448,790.37',
  currency: 'Colones',
  deductions: [
    {
      concept: 'Lorem Ipsum - Ahorro obligatorio',
      calculationBasis: 'Horas',
      deduction: '22,439.52'
    },
    {
      concept: 'SEM Trabajador – CCSS',
      calculationBasis: 'Horas',
      deduction: '24,683.47'
    },
    {
      concept: 'IVM Trabajador – CCSS',
      calculationBasis: 'Horas',
      deduction: '18,714.56'
    },
    {
      concept: 'Aporte Obrero Banco Popular - LPT',
      calculationBasis: 'Horas',
      deduction: '4,487.90'
    },
  ],
  totalDeductions: '70,325.45',
  net: '378,464.92'
}

</script>

<template>
  <div class="main-container">
    <section>
      <h2 class="general-title pb-8">
        {{ $t('salaryDetail.titles.payrollIncome')+formatDateToString(salaryData.startDate)+$t('salaryDetail.titles.payrollTo')+formatDateToString(salaryData.endDate) }}
      </h2>
      <div class="card">
        <div class="card__content">
          <div class="grid grid-cols-3 lg:grid-cols-10 gap-4 lg:gap-2 px-0 lg:px-10 xl:px-20">
            <div class="col-span-1 p-2 flex items-center">
              <div class="icon-pill--main">
                <FontAwesomeIcon :icon="currencyIconConfig[salaryData.currency].icon" />
              </div>
            </div>
            <div class="col-span-3 p-4">
              <h4 class="general-text">{{ $t('salaryDetail.headers.concept') }}</h4>
              <span class="general-title">{{ salaryData.concept }}</span>
            </div>
            <div class="col-span-3 p-4">
              <h4 class="general-text">{{ $t('salaryDetail.headers.calculationBasis') }}</h4>
              <span class="general-title">{{ salaryData.calculationBasis }}</span>
            </div>
            <div class=" card--success col-span-3 p-4">
              <h4 class="general-text">{{ $t('salaryDetail.headers.income') }}</h4>
              <span class="general-title-text">{{ salaryData.income }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="general-title pb-8">{{ $t('salaryDetail.titles.deductions') }}</h2>
      <div class="table-container">
        <table>
        <thead>
          <tr class="grid grid-cols-3 lg:grid-cols-10 gap-4 lg:gap-2 px-0 lg:px-14 xl:px-28">
            <th class="col-span-4 p-4">
              {{ $t('salaryDetail.headers.concept') }}
            </th>
            <th class="col-span-3 p-4">
              {{ $t('salaryDetail.headers.calculationBasis') }}
            </th>
            <th class="col-span-3 p-4">
              {{ $t('salaryDetail.headers.deduction') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in salaryData.deductions" :key="rowIndex" class="grid grid-cols-3 lg:grid-cols-10 gap-4 lg:gap-2 px-0 lg:px-14 xl:px-28">
            <td class="col-span-4 p-4" :data-label="$t('salaryDetail.headers.concept')">
              {{ row.concept }}
            </td>
            <td class="col-span-3 p-4" :data-label="$t('salaryDetail.headers.calculationBasis')">
              {{ row.calculationBasis }}
            </td>
            <td class="col-span-3 p-4" :data-label="$t('salaryDetail.headers.deduction')">
              {{ row.deduction }}
            </td>
          </tr>
          <tr class="grid grid-cols-3 lg:grid-cols-10 gap-4 lg:gap-2 px-0 lg:px-14 xl:px-28">
            <td class="lg:col-start-8 col-span-3 p-0 lg:pb-4 lg:px-0 lg:pt-0">
              <div class="card--error p-4 w-full rounded-t-none lg:rounded-t-2xl">
                <h4>{{ $t('salaryDetail.headers.totalDeductions') }}</h4>
                <span>{{ salaryData.totalDeductions }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
    <section>
      <h2 class="general-title pb-8">
        {{ $t('salaryDetail.titles.net') }}
      </h2>
      <div class="card">
        <div class="card__content">
          <div class="grid grid-cols-3 lg:grid-cols-10 gap-4 lg:gap-2 px-0 lg:px-10 xl:px-20 justify-between">
            <div class="card--success col-span-3 p-4">
              <h4 class="general-text">{{ $t('salaryDetail.headers.totalIncomes') }}</h4>
              <span class="general-title">{{ salaryData.income }}</span>
            </div>
            <div class="card--error col-span-3 lg:col-span-4 p-4 lg:mx-[12.5%]">
              <h4 class="general-text">{{ $t('salaryDetail.headers.totalDeductions') }}</h4>
              <span class="general-title">{{ salaryData.totalDeductions }}</span>
            </div>
            <div class="card--info col-span-3 p-4">
              <h4 class="general-text">{{ $t('salaryDetail.headers.net') }}</h4>
              <span class="general-title">{{ salaryData.net }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="postcss">
.card--error, .card--success, .card--info{
  span, h4{
    @apply text-white !important;
  }
}
.icon-pill--main{
  @apply w-14 h-14 !important;
}

</style>
