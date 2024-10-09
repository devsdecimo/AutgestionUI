<script setup lang="ts">
//Data
import { ref } from 'vue';

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

const form = ref({
  policy: '',
  startDate: null,
  endDate:null,
  days:0
})

// Función que se ejecuta al enviar el formulario
const handleSubmit = () => {
  console.log(form.value);
};



</script>

<template>
  <!-- container botones -->
  <div class="button-container">
    <a href="/vacations/request" class="btn--main btn--small whitespace-nowrap">
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </a>
    <a href="/vacations/year-report" class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('vacation.submenuLabels.yearReport') }}
    </a>
    <a href="/vacations/resolutions" class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('vacation.submenuLabels.resolution') }}
    </a>
  </div>
  <div class="main-container">
    <section>
      <h2>{{$t('vacationCreate.title')}}</h2>
      <div class="lg:card pb-8">
        <div class="lg:card__content">
          <div class="mobile-card mb-8 lg:mb-0">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
              <div>
                <h4>{{$t('vacationCreate.tableHeaders.accumulated')}}</h4>
                <span>{{employeeData.balance.accumulated}}</span>
              </div>
              <div>
                <h4>{{$t('vacationCreate.tableHeaders.consumed')}}</h4>
                <span>{{employeeData.balance.consumed}}</span>
              </div>
              <div>
                <h4>{{$t('vacationCreate.tableHeaders.requested')}}</h4>
                <span>{{employeeData.balance.requested}}</span>
              </div>
              <div>
                <h4>{{$t('vacationCreate.tableHeaders.adjustment')}}</h4>
                <span>{{employeeData.balance.adjustment}}</span>
              </div>
              <div>
                <h4>{{$t('vacationCreate.tableHeaders.available')}}</h4>
                <span>{{employeeData.balance.available}}</span>
              </div>
              <div>
                <h4>{{$t('vacationCreate.tableHeaders.availableWithReservation')}}</h4>
                <span>{{employeeData.balance.availableWithReservation}}</span>
              </div>
            </div>
          </div>
          <div class="p-0 lg:p-16">
            <h3 class="mb-8">{{$t('vacationCreate.subtitle')}}</h3>
            <div class="mobile-card">
              <form @submit.prevent="handleSubmit">
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
                    <input type="date" v-model="form.startDate">
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationCreate.labels.endDate')}}</label>
                    <input type="date" v-model="form.endDate">
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
.main-container{
  @apply p-10;
}
.button-container{
  @apply flex gap-10 overflow-auto max-w-[100vw] px-10 py-5;
}
h2{
  @apply font-bold text-base leading-5 pb-8 text-dark;
}
h3{
  @apply text-dark text-base font-bold;
}
h4{
  @apply text-dark-2;
}
span{
  @apply text-dark font-bold;
}
label{
  @apply text-dark-2 mb-3;
}
input, select{
  @apply font-bold border-dark-4 text-base text-dark;
}
.mobile-card{
  @media screen and (max-width:1024px){
    @apply card p-4;
  }
}

</style>
