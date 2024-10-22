<script setup lang="ts">
import { formatDateToString} from '../../../utils/dateUtils';
//Data
const data = {
  employeeInformation:{
    name: 'Jorge Trejos Castro',
    code: '111111263',
    position: 'Goodpack Administrativo'
  },
  typesOfPolicy:[
    {
      title: 'Vacaciones de Ley',
      openingDate: '2023-10-01',
      period: '2024',
      annualFactor: '0.00',
      monthlyFactor: '0.00',
      dailyFactor: '0.00',
      accumulated: '0.00',
      enjoyed: '0.00',
      balance: '0.00',
    },
    {
      title: 'Días Libres',
      openingDate: '2023-10-01',
      period: '2024',
      annualFactor: '0.00',
      monthlyFactor: '0.00',
      dailyFactor: '0.00',
      accumulated: '0.00',
      enjoyed: '0.00',
      balance: '0.00',
    }
  ]
}

</script>

<template>
  <!-- container botones -->
  <div class="submenu-container">
    <a href="/vacations/request" class="submenu-container__item btn--small btn--outline">
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </a>
    <a href="/vacations/year-report" class="submenu-container__item btn--small">
      {{ $t('vacation.submenuLabels.yearReport') }}
    </a>
    <a href="/vacations/resolutions" class="submenu-container__item btn--small btn--outline">
      {{ $t('vacation.submenuLabels.resolution') }}
    </a>
  </div>
  <div class="main-container">
    <h2 class="general-title">{{$t('vacationYearReport.title')}}</h2>
    <section v-for="(policy, index) in data.typesOfPolicy" :key="index">
      <h3 class="general-text">{{policy.title}}</h3>
      <h2 class="pb-8 general-title">{{$t('vacationYearReport.labels.openingDate')+": "+formatDateToString(policy.openingDate)}}</h2>
      <div class="card">
        <div class="card__content grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-2">
          <div class="py-3">
            <h4 class="general-text">{{$t('vacationYearReport.labels.period')}}</h4>
            <span class="general-title">{{policy.period}}</span>
          </div>
          <div class="py-3">
            <h4 class="general-text">{{$t('vacationYearReport.labels.annualFactor')}}</h4>
            <span class="general-title">{{policy.annualFactor}}</span>
          </div>
          <div class="py-3">
            <h4 class="general-text">{{$t('vacationYearReport.labels.monthlyFactor')}}</h4>
            <span class="general-title">{{policy.monthlyFactor}}</span>
          </div>
          <div class="py-3">
            <h4 class="general-text">{{$t('vacationYearReport.labels.dailyFactor')}}</h4>
            <span class="general-title">{{policy.dailyFactor}}</span>
          </div>
          <div class="py-3">
            <h4 class="general-text">{{$t('vacationYearReport.labels.accumulated')}}</h4>
            <span class="general-title">{{policy.accumulated}}</span>
          </div>
          <div class="py-3">
            <h4 class="general-text">{{$t('vacationYearReport.labels.enjoyed')}}</h4>
            <span class="general-title">{{policy.enjoyed}}</span>
          </div>
          <div class="card--main py-3 px-6">
            <h4 class="general-text white">{{$t('vacationYearReport.labels.balance')}}</h4>
            <span class="general-title white">{{policy.balance}}</span>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped lang="postcss">
.white{
  @apply text-white !important;
}

</style>
