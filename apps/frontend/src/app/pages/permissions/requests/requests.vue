<template>
  <div class="flex flex-col gap-6">
    <h1 class="general-title hidden md:block">
      {{ $t('permissions.mainTitle') }}
    </h1>
    <p class="general-text">{{ $t('permissions.searchOpts') }}</p>
  </div>
  <div class="card w-full">
    <form class="filter-form" @submit.prevent="handleSubmit">
      <div
        class="card__content grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        <div class="flex flex-col">
          <label for="state">{{ $t('permissions.state') }}</label>
          <select
            class="select w-full"
            type="select"
            id="state"
            name="state"
            v-model="formData.state"
          >
            <option selected :value="true">
              {{ $t('permissions.approved') }}
            </option>
            <option :value="false">{{ $t('permissions.rejected') }}</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="startDate">{{ $t('permissions.startDate') }}</label>
          <FormattableDateField
            :datePattern="dateFormat"
            :placeholder="datePlaceholder"
            class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"
            id="startDate"
            name="startDate"
            v-model="formData.startDate"
          />
        </div>
        <div class="flex flex-col">
          <label for="endDate">{{ $t('permissions.endDate') }}</label>
          <FormattableDateField
            :datePattern="dateFormat"
            :placeholder="datePlaceholder"
            class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"
            id="endDate"
            name="endDate"
            v-model="formData.endDate"
          />
        </div>
        <div class="flex flex-col">
          <label>{{ $t('vacationRequest.formLabels.contributorName') }}</label>
          <select class="select h-full" v-model="formData.employeeName">
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
          <button class="btn--main col-start-2 font-semibold">
            {{ $t('permissions.search') }}
          </button>
        </div>
      </div>
    </form>
  </div>

  <div>
    <a class="btn--main block font-semibold" href="/permissions/create">
      {{ $t('permissions.createApplication') }}
    </a>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="text-dark-3">
            {{ $t('permissions.applicationNumber') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.actionType') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.register') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.start') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.end') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.time') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.justification') }}
          </th>
          <th class="text-dark-3">
            {{ $t('permissions.state') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableRows" :key="rowIndex">
          <td
            class="col-span-4 p-4"
            :data-label="$t('permissions.applicationNumber')"
          >
            {{ row.applicationNumber }}
          </td>
          <td class="col-span-4 p-4" :data-label="$t('permissions.actionType')">
            {{ row.actionType }}
          </td>
          <td class="col-span-4 p-4" :data-label="$t('permissions.register')">
            {{ row.register }}
          </td>
          <td class="col-span-4 p-4" :data-label="$t('permissions.start')">
            {{ row.start }}
          </td>
          <td class="col-span-4 p-4" :data-label="$t('permissions.end')">
            {{ row.end }}
          </td>
          <td class="col-span-4 p-4" :data-label="$t('permissions.time')">
            {{ row.time }}
          </td>
          <td
            class="col-span-4 p-4"
            :data-label="$t('permissions.justification')"
          >
            {{ row.justification }}
          </td>
          <td class="col-span-4 p-4" :data-label="$t('permissions.state')">
            {{ row.state }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FormattableDateField } from '@ventura/ui';

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

// Definimos los datos en el script del componente
const formData = ref({
  state: true,
  startDate: '',
  endDate: '',
  employeeName: 'Jorge Trejos Castro',
});

const tableRows = ref([
  {
    applicationNumber: '2318',
    actionType: 'Lorem Ipsum',
    register: '26/07/2024',
    start: '29/07/2024',
    end: '29/07/2024',
    time: '00:00',
    justification: 'Lorem Ipsum',
    state: 'Aprobado',
  },
  {
    applicationNumber: '2318',
    actionType: 'Lorem Ipsum',
    register: '26/07/2024',
    start: '29/07/2024',
    end: '29/07/2024',
    time: '00:00',
    justification: 'Lorem Ipsum',
    state: 'Aprobado',
  },
  {
    applicationNumber: '2318',
    actionType: 'Lorem Ipsum',
    register: '26/07/2024',
    start: '29/07/2024',
    end: '29/07/2024',
    time: '00:00',
    justification: 'Lorem Ipsum',
    state: 'Aprobado',
  },
  {
    applicationNumber: '2318',
    actionType: 'Lorem Ipsum',
    register: '26/07/2024',
    start: '29/07/2024',
    end: '29/07/2024',
    time: '00:00',
    justification: 'Lorem Ipsum',
    state: 'Aprobado',
  },
  {
    applicationNumber: '2318',
    actionType: 'Lorem Ipsum',
    register: '26/07/2024',
    start: '29/07/2024',
    end: '29/07/2024',
    time: '00:00',
    justification: 'Lorem Ipsum',
    state: 'Aprobado',
  },
  {
    applicationNumber: '2318',
    actionType: 'Lorem Ipsum',
    register: '26/07/2024',
    start: '29/07/2024',
    end: '29/07/2024',
    time: '00:00',
    justification: 'Lorem Ipsum',
    state: 'Aprobado',
  },
]);

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

// Función que se ejecuta al enviar el formulario (Busqueda por Empleado)
const handleSubmit = () => {
  console.log(formData);
};
</script>
