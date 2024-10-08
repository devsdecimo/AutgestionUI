<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
//Data
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

const requestData = {
  policy: 'Health Insurance',
  requestNumber: route.params.id,
  registrationDate: '2024-01-15',
  startDate: '2024-01-15',
  endDate: '2024-01-20',
  state: 'approved',
  days: 5,
  reason: 'Visita al doctor',
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

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
      <h2>{{$t('vacationDetail.title')}}</h2>
      <div class="lg:card pb-8">
        <div class="lg:card__content">
          <div class="mobile-card mb-8 lg:mb-0">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
            <div>
              <h4>{{$t('vacationDetail.tableHeaders.accumulated')}}</h4>
              <span>{{employeeData.balance.accumulated}}</span>
            </div>
            <div>
              <h4>{{$t('vacationDetail.tableHeaders.consumed')}}</h4>
              <span>{{employeeData.balance.consumed}}</span>
            </div>
            <div>
              <h4>{{$t('vacationDetail.tableHeaders.requested')}}</h4>
              <span>{{employeeData.balance.requested}}</span>
            </div>
            <div>
              <h4>{{$t('vacationDetail.tableHeaders.adjustment')}}</h4>
              <span>{{employeeData.balance.adjustment}}</span>
            </div>
            <div>
              <h4>{{$t('vacationDetail.tableHeaders.available')}}</h4>
              <span>{{employeeData.balance.available}}</span>
            </div>
            <div>
              <h4>{{$t('vacationDetail.tableHeaders.availableWithReservation')}}</h4>
              <span>{{employeeData.balance.availableWithReservation}}</span>
            </div>
          </div>
          </div>
          <div class="p-0 lg:p-16">
            <h3 class="mb-8">{{$t('vacationDetail.subtitle')}} {{formatDate(requestData.registrationDate)}}</h3>
            <div class="mobile-card">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="flex flex-col">
                <label>{{$t('vacationDetail.labels.contributorName')}}</label>
                <input type="text" :value="employeeData.employeeInformation.name" readonly>
              </div>
              <div class="flex flex-col">
                <label>{{$t('vacationDetail.labels.requestNumber')}}</label>
                <input type="text" :value="requestData.requestNumber" readonly>
              </div>
              <div class="flex flex-col">
                <label>{{$t('vacationDetail.labels.startDate')}}</label>
                <input type="date" :value="requestData.startDate" readonly>
              </div>
              <div class="flex flex-col">
                <label>{{$t('vacationDetail.labels.endDate')}}</label>
                <input type="date" :value="requestData.endDate" readonly>
              </div>
              <div class="flex flex-col">
                <label>{{$t('vacationDetail.labels.days')}}</label>
                <input type="text" :value="requestData.days" readonly>
              </div>
              <div class="flex flex-col">
                <label>{{$t('vacationDetail.labels.reason')}}</label>
                <input type="text" :value="requestData.reason" readonly>
              </div>
            </div>
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
  @apply text-dark lg:text-main text-base lg:text-lg font-bold;
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
input{
  @apply font-bold border-dark-4 text-base;
}
.mobile-card{
  @media screen and (max-width:1024px){
    @apply card p-4;
  }
}

</style>
