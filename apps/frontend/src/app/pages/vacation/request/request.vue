<script setup lang="ts">
import { ref } from 'vue';

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

//Data para opciones de estado de request
const stateOptions = [
  'approved',
  'pending',
  'rejected'
]

//Variables reactivas
const searchData = ref(null);
const form = ref({
  state: '',
  name: '',
  startDate:null,
  endDate:null
})

// Función que se ejecuta al enviar el formulario (Busqueda por Empleado)
const handleSubmit = () => {
  let result = null;
  for(let i=0; i<employeesData.length; i++){
    if(employeesData[i].name === form.value.name){
      result = employeesData[i];
    }
  }
  if(result){
    searchData.value = result;
  }
};

</script>

<template>
  <!-- container botones -->
  <div class="button-container">
    <button class="btn--main btn--small whitespace-nowrap">
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </button>
    <button class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('vacation.submenuLabels.yearReport') }}
    </button>
    <button class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('vacation.submenuLabels.resolution') }}
    </button>
  </div>
  <div class="main-container">
    <section>
      <h2>{{$t('vacationRequest.title')}}</h2>
      <h3>{{$t('vacationRequest.subtitle')}}</h3>
      <div class="card">
        <form @submit.prevent="handleSubmit">
          <div class="card__content grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-8">
            <div class="flex flex-col">
              <label>{{$t('vacationRequest.formLabels.state')}}</label>
              <select class="select h-full"  v-model="form.state">
                <option value="" hidden>{{$t('vacationRequest.formLabels.selectOption')}}</option>
                <option v-for="(option, index) in stateOptions" :key="index" :value="option">{{$t('vacationRequest.stateOptions.'+option)}}</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label>{{$t('vacationRequest.formLabels.startDate')}}</label>
              <input type="date"  v-model="form.startDate">
            </div>
            <div class="flex flex-col">
              <label>{{$t('vacationRequest.formLabels.endDate')}}</label>
              <input type="date"  v-model="form.endDate">
            </div>
            <div class="flex flex-col">
              <label>{{$t('vacationRequest.formLabels.contributorName')}}</label>
              <select class="select h-full"  v-model="form.name">
                <option value="" hidden>{{$t('vacationRequest.formLabels.selectOption')}}</option>
                <option v-for="(employee, index) in employeesData" :key="index" :value="employee.name">{{employee.name}}</option>
              </select>
            </div>
            <div class="lg:col-start-2 xl:col-start-4 grid grid-cols-2">
              <button type="submit" class="btn--main  btn--small col-start-2">{{$t('vacationRequest.btnLabels.search')}}</button>
            </div>
            </div>
        </form>
      </div>
    </section>
    <section class="pt-10">
      <a href="/vacations/request/create" class="btn--main mb-8 inline-block">{{$t('vacationRequest.btnLabels.createRequest')}}</a>
      <div v-if="searchData" class="pb-8">
        <!-- Version Desktop -->
        <table class="hidden lg:table">
          <thead>
            <tr>
              <th>{{$t('vacationRequest.tableHeaders.policy')}}</th>
              <th>{{$t('vacationRequest.tableHeaders.requestNumber')}}</th>
              <th>{{$t('vacationRequest.tableHeaders.registrationDate')}}</th>
              <th>{{$t('vacationRequest.tableHeaders.state')}}</th>
              <th>{{$t('vacationRequest.tableHeaders.days')}}</th>
              <th>{{$t('vacationRequest.tableHeaders.details')}}</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="(row, rowIndex) in searchData.requests" :key="rowIndex">
            <td>{{row.policy}}</td>
            <td>{{row.requestNumber}}</td>
            <td>{{row.registrationDate}}</td>
            <td>{{$t('vacationRequest.stateOptions.'+row.state)}}</td>
            <td>{{row.days}}</td>
            <td>
              <a :href="'/vacation/request/'+row.requestNumber" class="btn--main btn--small inline-block">
              {{$t('vacationRequest.btnLabels.seeMore')}}
            </a>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- Version Mobile -->
        <div v-for="(row, index) in searchData.requests" :key="index" class="block lg:hidden card mb-10">
          <div class="card__content flex flex-col gap-6">
            <div>
              <h3>{{$t('vacationRequest.tableHeaders.policy')}}</h3>
              <span>{{row.policy}}</span>
            </div>
            <div>
              <h3>{{$t('vacationRequest.tableHeaders.requestNumber')}}</h3>
              <span>{{row.requestNumber}}</span>
            </div>
            <div>
              <h3>{{$t('vacationRequest.tableHeaders.registrationDate')}}</h3>
              <span>{{row.registrationDate}}</span>
            </div>
            <div>
              <h3>{{$t('vacationRequest.tableHeaders.state')}}</h3>
              <span>{{$t('vacationRequest.stateOptions.'+row.state)}}</span>
            </div>
            <div>
              <h3>{{$t('vacationRequest.tableHeaders.days')}}</h3>
              <span>{{row.days}}</span>
            </div>
            <div>
              <a :href="'/vacation/request/'+row.requestNumber" class="btn--main btn--small inline-block">
                {{$t('vacationRequest.btnLabels.seeMore')}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped lang="postcss">
.main-container{
  @apply p-10;
}
.button-container{
  @apply flex gap-10 overflow-auto max-w-[100vw] px-10 py-5;
}
h2{
  @apply font-bold text-base leading-5 pb-8 text-dark;
}
h3, label{
  @apply text-dark-2;
}
h3{
  @apply mb-6;
}
span{
  @apply text-dark font-bold;
}
select {
  @apply text-base;
}


</style>
