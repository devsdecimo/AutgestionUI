<template>
  <!-- container botones -->
  <div class="submenu-container">
    <a class="submenu-container__item btn--small btn--outline" href="/time">
      {{ $t('timeRecords.timeRegistration') }}
    </a>
    <a class="submenu-container__item btn--small" href="/time/records">
      {{ $t('timeRecords.timeRecordQuery') }}
    </a>
  </div>

  <div class="main-container">
    <!-- form -->
    <div class="card w-full">
      <form class="filter-form" @submit.prevent="handleSubmit">
        <div class="card__content grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-8">
          <div class="flex flex-col">
            <label for="state">{{ $t('timeRecords.state')}}</label>
            <select
              class="select h-full"
              type="select" id="state" name="state" v-model="formData.state">
              <option selected :value="'checkIns'">{{ $t('timeRecords.checkIns') }}</option>
              <option :value="'checkOuts'">{{ $t('timeRecords.checkOuts') }}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="startDate">{{
              $t('timeRecords.startDate') }}</label>
        <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="formData.startDate" />
            
          </div>
          <div class="flex flex-col">
            <label for="endDate">{{
              $t('timeRecords.endDate') }}</label>
        <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="endDate" name="endDate" v-model="formData.endDate" />
           
          </div>
          <div class="flex flex-col">
            <label for="employeeName">{{
              $t('timeRecords.employeeName') }}</label>
            <input type="text"
              id="employeeName" name="employeeName" :value="formData.employeeName" />
          </div>

          <div class="lg:col-start-2 xl:col-start-4 grid grid-cols-2">
            <button class="btn--main col-start-2 font-semibold">
              {{ $t('timeRecords.search') }}
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- table -->
    <div class="table-container">
      <table>
    <thead>
        <tr>
            <th class="text-dark-3">{{ $t('timeRecords.markDate') }}</th>
            <th class="text-dark-3">{{ $t('timeRecords.markTime') }}</th>
            <th class="text-dark-3">{{ $t('timeRecords.markType') }}</th>
            <th class="text-dark-3">{{ $t('timeRecords.location') }}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row, rowIndex) in tableRows" :key="rowIndex">
            <td :data-label="$t('timeRecords.markDate')">
              {{ row.markDate }}
            </td>
          <td :data-label="$t('timeRecords.markTime')">
            {{ row.markTime }}
          </td>
          <td :data-label="$t('timeRecords.markType')">
            {{ row.markType }}
          </td>
          <td :data-label="$t('timeRecords.location')">
            {{ row.location }}
          </td>
        </tr>
    </tbody>
</table>
    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue';
import {FormattableDateField} from '@ventura/ui'

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');
  
const formData = reactive({
  state: 'checkIns',
  startDate: '',
  endDate: '',
  employeeName: 'Jorge Trejos Castro'
});

const tableRows = reactive([
    {markDate: '26/07/2024', markTime: '00:00', markType: 'CheckIn', location: 'San José, CR - Ventura'},
    {markDate: '26/07/2024', markTime: '00:00', markType: 'CheckIn', location: 'San José, CR - Ventura'},
    {markDate: '26/07/2024', markTime: '00:00', markType: 'CheckIn', location: 'San José, CR - Ventura'},
    {markDate: '26/07/2024', markTime: '00:00', markType: 'CheckIn', location: 'San José, CR - Ventura'},
    {markDate: '26/07/2024', markTime: '00:00', markType: 'CheckIn', location: 'San José, CR - Ventura'},
    {markDate: '26/07/2024', markTime: '00:00', markType: 'CheckIn', location: 'San José, CR - Ventura'},
]);

</script>

<style scoped lang="postcss">
.btn--main:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

</style>
