<template>
  <div class="main-container">
    <!-- titulo -->
    <div class="flex flex-col gap-6 justify-center md:justify-start">
      <h1 class="general-title hidden md:block">
        {{ $t('requests.mainTitle') }}
      </h1>
      <h4 class="general-text text-center md:text-start">
        {{ $t('requests.searchOptions') }}
      </h4>
    </div>
    <div class="w-full gap-16 grid grid-cols-1 lg:grid-cols-10">
      <!-- filtros -->
      <div class="card w-full lg:w-auto col-span-1 lg:col-span-3">
        <form class="filter-form" @submit.prevent="handleSubmit">
              <div class="card__content flex flex-col gap-6">
                <div class="flex flex-col">
                    <label for="reason">{{
                        $t('requests.reason') }}</label>
                    <input
                        type="text" id="reason" name="reason" v-model="formData.reason" />
                </div>
                <div class="flex flex-col">
                    <label for="requestNumber">{{
                        $t('requests.requestNumberFilter') }}</label>
                    <input
                        type="number" id="requestNumber" name="requestNumber" :value="formData.requestNumber" />
                </div>
                <div class="flex flex-col">
                    <label for="registerDate">{{
                        $t('requests.registerDate') }}</label>
                <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="registerDate" name="registerDate" v-model="formData.registerDate" />
                </div>
                <div class="flex flex-col">
                    <label for="state">{{
                        $t('requests.state')
                        }}</label>
                    <select
                        class="select h-full"
                        type="select" id="state" name="state" v-model="formData.state">
                        <option selected :value="true">{{ $t('requests.opened') }}</option>
                        <option :value="false">{{ $t('requests.closed') }}</option>
                    </select>
                </div>
                <div class="text-right">
                    <button class="btn--main font-semibold">
                        {{ $t('requests.search') }}
                    </button>
                </div>
              </div>
            </form>
      </div>
      <div class="table-container col-span-1 lg:col-span-7">
        <table>
          <thead>
            <tr>
              <th class="text-dark-3 w-1/4">{{ $t('requests.requestNumberTable') }}</th>
              <th class="text-dark-3 w-1/4">{{ $t('requests.register') }}</th>
              <th class="text-dark-3 w-1/4">{{ $t('requests.state') }}</th>
              <th class="text-dark-3 w-1/4 xl:w-1/6 text-center">{{ $t('requests.details') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in tableRows" :key="rowIndex">
              <td class="col-span-4 p-4" :data-label="$t('requests.requestNumberTable')">
                {{ row.applicationNumber }}
              </td>
              <td class="col-span-4 p-4" :data-label="$t('requests.register')">
                {{ row.register }}
              </td>
              <td class="col-span-4 p-4" :data-label="$t('requests.state')">
                {{ row.state }}
              </td>
              <td class="text-right w-full">
                <a class="btn--main btn-small whitespace-nowrap py-2" :href="'/requests/' + row.applicationNumber">
                  {{ $t('requests.viewMore') }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { FormattableDateField } from '@ventura/ui';

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

// Definimos los datos en el script del componente
const formData = reactive({
    reason: 'Otras Gestiones',
    requestNumber: '',
    registerDate: '',
    state: false,
});

const tableRows = reactive([
    { applicationNumber: '2318', register: '26/07/2024', state: 'Aprobado' },
    { applicationNumber: '2318', register: '26/07/2024', state: 'Aprobado' },
    { applicationNumber: '2318', register: '26/07/2024', state: 'Aprobado' },
    { applicationNumber: '2318', register: '26/07/2024', state: 'Aprobado' },
    { applicationNumber: '2318', register: '26/07/2024', state: 'Aprobado' },
    { applicationNumber: '2318', register: '26/07/2024', state: 'Aprobado' },
])


</script>
