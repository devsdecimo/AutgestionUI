<template>
    <!-- container botones -->
    <div class="submenu-container">
        <a class="submenu-container__item btn--small btn--outline" href="/permissions">
            {{ $t('permissionsResolution.applicationBtn') }}
        </a>
        <a class="submenu-container__item btn--small" href="/permissions/resolutions">
            {{ $t('permissionsResolution.resolutionBtn') }}
        </a>
    </div>
    <div class="main-container">
        <!-- titulo -->
        <div class="flex flex-col gap-6">
            <h1 class="general-title hidden md:block">{{ $t('permissionsResolution.mainTitle') }}</h1>
            <p class="general-text">{{ $t('permissionsResolution.searchOpts') }}</p>
        </div>
        <div
            class="card w-full">
          <form class="filter-form" @submit.prevent="handleSubmit">
            <div class="card__content grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-8">
              <div class="flex flex-col">
                <label for="state">{{ $t('permissionsResolution.state') }}</label>
                <select
                    class="select w-full"
                    type="select" id="state" name="state" v-model="formData.state">
                    <option selected :value="true">{{ $t('permissionsResolution.approved') }}</option>
                    <option :value="false">{{ $t('permissionsResolution.rejected') }}</option>
                </select>
              </div>
              <div class="flex flex-col">
                  <label for="startDate">{{
                      $t('permissionsResolution.startDate') }}</label>
                <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="formData.startDate" />
                 
              </div>
              <div class="flex flex-col">
                  <label for="endDate">{{
                      $t('permissionsResolution.endDate') }}</label>
                    <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="endDate" name="endDate" v-model="formData.endDate" />
              </div>
              <div class="flex flex-col">
                <label>{{$t('vacationRequest.formLabels.contributorName')}}</label>
                <select class="select h-full"  v-model="formData.employeeName">
                  <option value="" hidden>{{$t('vacationRequest.formLabels.selectOption')}}</option>
                  <option v-for="(employee, index) in employeesData" :key="index" :value="employee.name">{{employee.name}}</option>
                </select>
              </div>
              <div class="lg:col-start-2 xl:col-start-4 grid grid-cols-2">
                  <button class="btn--main col-start-2 font-semibold">
                      {{ $t('permissionsResolution.search') }}
                  </button>
              </div>
            </div>
          </form>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16">
            <div v-for="item in applications" :key="item.id">
                <PermitCard :name="item.employee" :applicationNumber="item.applicationNumber" :id="item.identification" :actionType="item.actionType" :registrationDate="item.register" :startDate="item.start" :endDate="item.end" :reason="item.justification" :state="item.state" :doc="item.supportDocument" :time="item.time" :labels="labels"/>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import {PermitCard, FormattableDateField} from '@ventura/ui'
import { useI18n } from 'vue-i18n';

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

// Definimos los datos en el script del componente
const formData = reactive({
    state: true,
    startDate: '',
    endDate: '',
    employeeName: 'Jorge Trejos Castro'
});

const applications = reactive([
    {applicationNumber: '2318', identification: '111111263', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '10:00', justification: 'Lorem Ipsum', state: 'Aprobado', supportDocument: 'Doc Lorem Ipsum', employee: 'Jorge Trejos Castro'},
    {applicationNumber: '2318', identification: '111111263', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado', supportDocument: 'Doc Lorem Ipsum', employee: 'Jorge Trejos Castro'},
    {applicationNumber: '2318', identification: '111111263', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado', supportDocument: 'Doc Lorem Ipsum', employee: 'Jorge Trejos Castro'},
    {applicationNumber: '2318', identification: '111111263', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado', supportDocument: 'Doc Lorem Ipsum', employee: 'Jorge Trejos Castro'},
    {applicationNumber: '2318', identification: '111111263', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado', supportDocument: 'Doc Lorem Ipsum', employee: 'Jorge Trejos Castro'},
    {applicationNumber: '2318', identification: '111111263', actionType: 'Lorem Ipsum', register: '26/07/2024', start: '29/07/2024', end: '29/07/2024', time: '00:00', justification: 'Lorem Ipsum', state: 'Aprobado', supportDocument: 'Doc Lorem Ipsum', employee: 'Jorge Trejos Castro'},
])

const { t } = useI18n();
const labels = {
  name: t('permissionsResolution.completeName'),
  applicationNumber: t('permissionsResolution.applicationNumber'),
  id: t('permissionsResolution.identification'),
  actionType: t('permissionsResolution.actionType'),
  registrationDate: t('permissionsResolution.register'),
  startDate: t('permissionsResolution.start'),
  endDate: t('permissionsResolution.end'),
  reason: t('permissionsResolution.justification'),
  state: t('permissionsResolution.state'),
  doc: t('permissionsResolution.supportDoc'),
  time: t('permissionsResolution.time'),
};

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
        days: 5
      },
      {
        policy: 'Vacation',
        requestNumber: 'REQ002',
        registrationDate: '2024-02-10',
        state: 'pending',
        days: 10
      }
    ]
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
        days: 2
      },
      {
        policy: 'Sick Leave',
        requestNumber: 'REQ004',
        registrationDate: '2024-04-08',
        state: 'approved',
        days: 7
      }
    ]
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
        days: 15
      },
      {
        policy: 'Health Insurance',
        requestNumber: 'REQ006',
        registrationDate: '2024-06-01',
        state: 'approved',
        days: 3
      }
    ]
  }
];

// Función que se ejecuta al enviar el formulario (Busqueda por Empleado)
const handleSubmit = () => {
  console.log(formData)
};
</script>


<style scoped>
h2{
  @apply font-bold text-base leading-5 pb-8 text-dark;
}
h3{
  @apply mb-6 text-dark-2;
}
span{
  @apply text-dark font-bold;
}
</style>
