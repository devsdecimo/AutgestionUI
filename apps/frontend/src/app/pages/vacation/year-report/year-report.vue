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
  <div class="button-container">
    <a href="/vacations/request" class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </a>
    <a href="/vacations/year-report" class="btn--main btn--small whitespace-nowrap">
      {{ $t('vacation.submenuLabels.yearReport') }}
    </a>
    <a href="/vacations/resolutions" class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('vacation.submenuLabels.resolution') }}
    </a>
  </div>
  <div class="main-container">
    <h2>{{$t('vacationYearReport.title')}}</h2>
    <section class="pb-10"  v-for="(policy, index) in data.typesOfPolicy" :key="index">
      <h3>{{policy.title}}</h3>
      <h2>{{$t('vacationYearReport.labels.openingDate')+": "+formatDateToString(policy.openingDate)}}</h2>
      <div class="card">
        <div class="card__content grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-2">
          <div class="py-3">
            <h4>{{$t('vacationYearReport.labels.period')}}</h4>
            <span>{{policy.period}}</span>
          </div>
          <div class="py-3">
            <h4>{{$t('vacationYearReport.labels.annualFactor')}}</h4>
            <span>{{policy.annualFactor}}</span>
          </div>
          <div class="py-3">
            <h4>{{$t('vacationYearReport.labels.monthlyFactor')}}</h4>
            <span>{{policy.monthlyFactor}}</span>
          </div>
          <div class="py-3">
            <h4>{{$t('vacationYearReport.labels.dailyFactor')}}</h4>
            <span>{{policy.dailyFactor}}</span>
          </div>
          <div class="py-3">
            <h4>{{$t('vacationYearReport.labels.accumulated')}}</h4>
            <span>{{policy.accumulated}}</span>
          </div>
          <div class="py-3">
            <h4>{{$t('vacationYearReport.labels.enjoyed')}}</h4>
            <span>{{policy.enjoyed}}</span>
          </div>
          <div class="card--main py-3 px-6">
            <h4 class="white">{{$t('vacationYearReport.labels.balance')}}</h4>
            <span class="white">{{policy.balance}}</span>
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
h3, h4{
  @apply text-dark-2;
}
span{
  @apply text-dark font-bold;

}
.white{
  @apply text-white !important;
}

</style>
