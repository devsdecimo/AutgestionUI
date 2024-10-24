<script setup lang="ts">
import { ref } from 'vue';
import { formatDateToString } from '../../../utils/dateUtils';
import { FormattableDateField } from '@ventura/ui';

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

//Data para simular busqueda
const employeesData = [
  {
    name: 'John Doe',
    employeeCode: 'E001',
    requests: [
      {
        policy: 'Health Insurance',
        requestNumber: 'REQ001',
        registrationDate: '2024-01-15',
        state: 'approved',
        days: 5,
      },
      {
        policy: 'Vacation',
        requestNumber: 'REQ002',
        registrationDate: '2024-02-10',
        state: 'pending',
        days: 10,
      },
    ],
  },
  {
    name: 'Jane Smith',
    employeeCode: 'E002',
    requests: [
      {
        policy: 'Life Insurance',
        requestNumber: 'REQ003',
        registrationDate: '2024-03-12',
        state: 'rejected',
        days: 2,
      },
      {
        policy: 'Sick Leave',
        requestNumber: 'REQ004',
        registrationDate: '2024-04-08',
        state: 'approved',
        days: 7,
      },
    ],
  },
  {
    name: 'Carlos Ruiz',
    employeeCode: 'E003',
    requests: [
      {
        policy: 'Vacation',
        requestNumber: 'REQ005',
        registrationDate: '2024-05-20',
        state: 'pending',
        days: 15,
      },
      {
        policy: 'Health Insurance',
        requestNumber: 'REQ006',
        registrationDate: '2024-06-01',
        state: 'approved',
        days: 3,
      },
    ],
  },
];

//Data para opciones de estado de request
const stateOptions = ['approved', 'pending', 'rejected'];

//Variables reactivas
const searchData = ref(null);
const form = ref({
  state: '',
  name: '',
  startDate: null,
  endDate: null,
});

// Función que se ejecuta al enviar el formulario (Busqueda por Empleado)
const handleSubmit = () => {
  let result = null;
  for (let i = 0; i < employeesData.length; i++) {
    if (employeesData[i].name === form.value.name) {
      result = employeesData[i];
    }
  }
  if (result) {
    searchData.value = result;
  }
};
</script>

<template>
  <section>
    <h2 class="general-title">{{ $t('vacationRequest.title') }}</h2>
    <h3 class="general-text">{{ $t('vacationRequest.subtitle') }}</h3>
    <div class="card">
      <form class="filter-form" @submit.prevent="handleSubmit">
        <div
          class="card__content grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          <div class="flex flex-col">
            <label>{{ $t('vacationRequest.formLabels.state') }}</label>
            <select class="select h-full" v-model="form.state">
              <option value="" hidden>
                {{ $t('vacationRequest.formLabels.selectOption') }}
              </option>
              <option
                v-for="(option, index) in stateOptions"
                :key="index"
                :value="option"
              >
                {{ $t('vacationRequest.stateOptions.' + option) }}
              </option>
            </select>
          </div>
          <div class="flex flex-col">
            <label>{{ $t('vacationRequest.formLabels.startDate') }}</label>
            <FormattableDateField
              :datePattern="dateFormat"
              :placeholder="datePlaceholder"
              class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"
              id="startDate"
              name="startDate"
              v-model="form.startDate"
            />
          </div>
          <div class="flex flex-col">
            <label>{{ $t('vacationRequest.formLabels.endDate') }}</label>
            <FormattableDateField
              :datePattern="dateFormat"
              :placeholder="datePlaceholder"
              class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"
              id="endDate"
              name="endDate"
              v-model="form.endDate"
            />
          </div>
          <div class="flex flex-col">
            <label>{{
              $t('vacationRequest.formLabels.contributorName')
            }}</label>
            <select class="select h-full" v-model="form.name">
              <option value="" hidden>
                {{ $t('vacationRequest.formLabels.selectOption') }}
              </option>
              <option
                v-for="(employee, index) in employeesData"
                :key="index"
                :value="employee.name"
              >
                {{ employee.name }}
              </option>
            </select>
          </div>
          <div class="lg:col-start-2 xl:col-start-4 grid grid-cols-2">
            <button type="submit" class="btn--main col-start-2 font-semibold">
              {{ $t('vacationRequest.btnLabels.search') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
  <section>
    <a
      href="/vacations/request/create"
      class="btn--main mb-8 inline-block font-semibold"
      >{{ $t('vacationRequest.btnLabels.createRequest') }}</a
    >
    <div v-if="searchData" class="pb-8">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>{{ $t('vacationRequest.tableHeaders.policy') }}</th>
              <th>{{ $t('vacationRequest.tableHeaders.requestNumber') }}</th>
              <th>{{ $t('vacationRequest.tableHeaders.registrationDate') }}</th>
              <th>{{ $t('vacationRequest.tableHeaders.state') }}</th>
              <th>{{ $t('vacationRequest.tableHeaders.days') }}</th>
              <th>{{ $t('vacationRequest.tableHeaders.details') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in searchData.requests" :key="rowIndex">
              <td :data-label="$t('vacationRequest.tableHeaders.policy')">
                {{ row.policy }}
              </td>
              <td
                :data-label="$t('vacationRequest.tableHeaders.requestNumber')"
              >
                {{ row.requestNumber }}
              </td>
              <td
                :data-label="
                  $t('vacationRequest.tableHeaders.registrationDate')
                "
              >
                {{ formatDateToString(row.registrationDate) }}
              </td>
              <td :data-label="$t('vacationRequest.tableHeaders.state')">
                {{ $t('vacationRequest.stateOptions.' + row.state) }}
              </td>
              <td :data-label="$t('vacationRequest.tableHeaders.days')">
                {{ row.days }}
              </td>
              <td class="text-right">
                <a
                  :href="'/vacations/request/' + row.requestNumber"
                  class="btn--main btn--small inline-block"
                >
                  {{ $t('vacationRequest.btnLabels.seeMore') }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
h2 {
  @apply pb-8;
}
h3 {
  @apply mb-6;
}
</style>
