<script setup lang="ts">
import { useRoute } from 'vue-router';
import { formatDateToString } from '../../../utils/dateUtils'

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
}

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
      <h2 class="general-title pb-8">{{$t('vacationDetail.title')}}</h2>
      <div class="lg:card pb-8">
        <div class="lg:card__content">
          <div class="mobile-card mb-8 lg:mb-0">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
            <div>
              <h4 class="general-text">{{$t('vacationDetail.tableHeaders.accumulated')}}</h4>
              <span class="general-title">{{employeeData.balance.accumulated}}</span>
            </div>
            <div>
              <h4 class="general-text">{{$t('vacationDetail.tableHeaders.consumed')}}</h4>
              <span class="general-title">{{employeeData.balance.consumed}}</span>
            </div>
            <div>
              <h4 class="general-text">{{$t('vacationDetail.tableHeaders.requested')}}</h4>
              <span class="general-title">{{employeeData.balance.requested}}</span>
            </div>
            <div>
              <h4 class="general-text">{{$t('vacationDetail.tableHeaders.adjustment')}}</h4>
              <span class="general-title">{{employeeData.balance.adjustment}}</span>
            </div>
            <div>
              <h4 class="general-text">{{$t('vacationDetail.tableHeaders.available')}}</h4>
              <span class="general-title">{{employeeData.balance.available}}</span>
            </div>
            <div>
              <h4 class="general-text">{{$t('vacationDetail.tableHeaders.availableWithReservation')}}</h4>
              <span class="general-title">{{employeeData.balance.availableWithReservation}}</span>
            </div>
          </div>
          </div>
          <div class="p-0 lg:p-16 input-form">
            <h3 class="special-title mb-8">{{$t('vacationDetail.subtitle')}} {{formatDateToString(requestData.registrationDate)}}</h3>
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
                <label>{{$t('vacationDetail.labels.state')}}</label>
                <input type="text" :value="$t('vacationRequest.stateOptions.'+requestData.state)" readonly>
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
.mobile-card{
  @media screen and (max-width:1024px){
    @apply card px-5 py-7;
  }
}

</style>
