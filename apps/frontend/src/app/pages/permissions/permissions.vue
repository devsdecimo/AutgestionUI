<template>
    <!-- container botones -->
    <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
        <button class="btn--main btn--small">
            {{ $t('permissions.applicationBtn') }}
        </button>
        <button class="btn--main btn--small btn--outline">
            {{ $t('permissions.resolutionBtn') }}
        </button>

    </div>
    <div class="flex flex-col items-start content-center gap-10 px-6 md:mt-4 pb-10">

        <!-- titulo -->
        <div class="flex flex-col gap-6">
            <h1 class="font-bold text-base hidden md:block leading-5">{{ $t('permissions.mainTitle') }}</h1>
            <p class="text-base text-dark-2">{{ $t('permissions.searchOpts') }}</p>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-4 md:p-20 bg-transparent md:bg-white drop-shadow-lg rounded-3xl gap-10 w-full items-center md:items-start">
            <div class="flex flex-col items-start justify-center gap-5">
                <label class="text-dark-2 text-base font-normal leading-7" for="state">{{ $t('permissions.state')
                    }}</label>
                <select
                    class="myselect appearance-none w-full border border-dark-4 rounded-full px-2 py-3 text-base text-dark-2 after:text-purple-700 focus:outline-none focus:border-main focus:ring-2 focus:ring-main"
                    type="select" id="state" name="state" v-model="formData.state">
                    <option selected :value="true">{{ $t('permissions.approved') }}</option>
                    <option :value="false">{{ $t('permissions.rejected') }}</option>
                </select>
            </div>
            <div class="flex flex-col items-start justify-center gap-5">
                <label class="text-dark-2 text-base font-normal leading-7" for="startDate">{{
                    $t('permissions.startDate') }}</label>
                <input class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base !w-5/6 md:w-full" type="date"
                    id="startDate" name="startDate" v-model="formData.startDate" />
            </div>
            <div class="flex flex-col items-start justify-center gap-5">
                <label class="text-dark-2 text-base font-normal leading-7" for="endDate">{{
                    $t('permissions.endDate') }}</label>
                <input class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base !w-5/6 md:w-full" type="date"
                    id="endDate" name="endDate" :value="formData.endDate" />
            </div>
            <div class="flex flex-col items-start justify-center gap-5">
                <label class="text-dark-2 text-base font-normal leading-7" for="employeeName">{{
                    $t('permissions.employeeName') }}</label>
                <input class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base !w-5/6 md:w-full" type="text"
                    id="employeeName" name="employeeName" :value="formData.employeeName" />
            </div>

            <div class="md:col-start-4 flex md:justify-end md:mr-16">
                <button class="btn--main btn--medium ">
                    {{ $t('permissions.search') }}
                </button>
            </div>
        </div>

        <div>
            <button class="btn--main btn--medium ">
                {{ $t('permissions.createApplication') }}
            </button>
        </div>
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
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="cell"></td>
          </tr>
        </tbody>
      </table>

    </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';

// Definimos los datos en el script del componente
const formData = reactive({
    state: true,
    startDate: '',
    endDate: '',
    employeeName: 'Jorge Trejos Castro'
});

const tableRows = reactive([
    {applicationNumber: '2318', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado'},
    {applicationNumber: '2318', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado'},
    {applicationNumber: '2318', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado'},
    {applicationNumber: '2318', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado'},
    {applicationNumber: '2318', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado'},
    {applicationNumber: '2318', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado'},
])

</script>


<style scoped>
.myselect {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.302438 0.198242L1.85367 0.198242L6.35224 6.61629L5.46582 6.61629L9.98655 0.198242L11.5156 0.198242L6.61816 7.07672L5.1999 7.07672L0.302438 0.198242Z' fill='%233A3A3C'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 12px 8px;
}
</style>