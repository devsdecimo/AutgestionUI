<script setup lang="ts">
//Data
import { reactive, ref, watch } from 'vue';
import { FormattableDateField } from '@ventura/ui';
import { useDateCalculator } from '../../../utils/dateCalculator'; 

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

const employeeData = {
  employeeInformation:{
    name: 'Jorge Trejos Castro',
    code: '111111263',
    position: 'Goodpack Administrativo'
  },
  balance:{
    accumulated: '0.00',
    consumed: '0.00',
    requested: '0.00',
    adjustment: '0.00',
    available: '0.00',
    availableWithReservation: '0.00',
  },
}
const availablePolicies = [
  'Vacaciones de Ley',
  'Días Libres'
]

const form = reactive({
  policy: '',
  startDate: null,
  endDate:null,
  days:0
})

// Define días libres manualmente (ejemplo: sábado = 6, domingo = 0)
const freeDaysOfWeek = [6, 0]; // Sábado y domingo como días libres
// Ejemplo de fechas festivas que pueden o no tener año
const freeDates = [
  '25/12',  // Navidad, sin año
  '01/01',  // Año Nuevo, sin año
  '23/10/2024', 
];

// Usa el hook para manejar la lógica de fechas y días
useDateCalculator(form, freeDaysOfWeek, freeDates);

// Función que se ejecuta al enviar el formulario
const handleSubmit = () => {
  console.log(form.value);
};

watch(() => form.days, () => {
      console.log('a');      
});


</script>

<template>
  <!-- container botones -->
  <div class="submenu-container">
    <a href="/vacations/request" class="submenu-container__item btn--small">
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </a>
    <a href="/vacations/year-report" class="submenu-container__item btn--small btn--outline">
      {{ $t('vacation.submenuLabels.yearReport') }}
    </a>
    <a href="/vacations/resolutions" class="submenu-container__item btn--small btn--outline">
      {{ $t('vacation.submenuLabels.resolution') }}
    </a>
  </div>
  <div class="main-container">
    <section>
      <h2 class="general-title pb-8">{{$t('vacationCreate.title')}}</h2>
      <div class="lg:card pb-8">
        <div class="lg:card__content">
          <div class="mobile-card mb-8 lg:mb-0">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
              <div>
                <h4 class="general-text">{{$t('vacationCreate.tableHeaders.accumulated')}}</h4>
                <span class="general-title">{{employeeData.balance.accumulated}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationCreate.tableHeaders.consumed')}}</h4>
                <span class="general-title">{{employeeData.balance.consumed}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationCreate.tableHeaders.requested')}}</h4>
                <span class="general-title">{{employeeData.balance.requested}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationCreate.tableHeaders.adjustment')}}</h4>
                <span class="general-title">{{employeeData.balance.adjustment}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationCreate.tableHeaders.available')}}</h4>
                <span class="general-title">{{employeeData.balance.available}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationCreate.tableHeaders.availableWithReservation')}}</h4>
                <span class="general-title">{{employeeData.balance.availableWithReservation}}</span>
              </div>
            </div>
          </div>
          <div class="p-0 lg:p-16">
            <h3 class="mb-8 general-title">{{$t('vacationCreate.subtitle')}}</h3>
            <div class="mobile-card">
              <form class="input-form" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div class="flex flex-col">
                    <label>{{$t('vacationCreate.labels.policy')}}</label>
                    <select class="select h-full" v-model="form.policy">
                      <option value="" hidden>{{$t('vacationRequest.formLabels.selectOption')}}</option>
                      <option v-for="(policy, index) in availablePolicies" :key="index" :value="policy">{{policy}}</option>
                    </select>
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationCreate.labels.days')}}</label>
                    <input type="text" v-model="form.days">
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationCreate.labels.startDate')}}</label>
                  <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="form.startDate" />
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationCreate.labels.endDate')}}</label>
                    <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="form.endDate" />
                  </div>
                  <div class="col-start-1 lg:col-start-2 grid grid-cols-1 lg:grid-cols-2 mx-8 lg:mx-0 mb-6 lg:mt-0">
                    <button type="submit" class="btn--main  btn--small lg:col-start-2 font-semibold">{{$t('vacationCreate.labels.sendRequest')}}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped lang="postcss">
.mobile-card{
  @media screen and (max-width:1024px){
    @apply card p-4;
  }
}

</style>
