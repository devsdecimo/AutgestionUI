<script setup lang="ts">

//Data
const data = {
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
  typesOfPolicy:[
    {
    active: true,
    title: 'Vacaciones de Ley',
    balance:{
      accumulated: '0.00',
      consumed: '0.00',
      requested: '0.00',
      adjustment: '0.00',
      available: '0.00',
      availableWithReservation: '0.00',
    }
    },
    {
      active: false,
      title: 'Días Libres',
      balance: {
        accumulated: '0.00',
        consumed: '0.00',
        requested: '0.00',
        adjustment: '0.00',
        available: '0.00',
        availableWithReservation: '0.00',
      }
    }
  ]
}

</script>

<template>
  <!-- container botones -->
  <div class="button-container">
    <button class="btn--main btn--small btn--outline whitespace-nowrap">
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
      <h2>{{$t('vacation.subtitles.information')}}</h2>
      <div class="information-card">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2">
          <div>
            <h4>{{$t('vacation.informationLabels.name')}}</h4>
            <span>{{data.employeeInformation.name}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.informationLabels.code')}}</h4>
            <span>{{data.employeeInformation.code}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.informationLabels.position')}}</h4>
            <span>{{data.employeeInformation.position}}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10">
      <h2>{{$t('vacation.subtitles.balance')}}</h2>
      <div class="card pb-8">
        <div class="card__content grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
          <div>
            <h4>{{$t('vacation.tableHeaders.accumulated')}}</h4>
            <span>{{data.balance.accumulated}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.tableHeaders.consumed')}}</h4>
            <span>{{data.balance.consumed}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.tableHeaders.requested')}}</h4>
            <span>{{data.balance.requested}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.tableHeaders.adjustment')}}</h4>
            <span>{{data.balance.adjustment}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.tableHeaders.available')}}</h4>
            <span>{{data.balance.available}}</span>
          </div>
          <div>
            <h4>{{$t('vacation.tableHeaders.availableWithReservation')}}</h4>
            <span>{{data.balance.availableWithReservation}}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10">
      <h2>{{$t('vacation.subtitles.typeOfPolicy')}}</h2>
      <div v-for="(policy, index) in data.typesOfPolicy" :key="index" class="relative">
        <div class="flex items-center gap-4 pb-4">
          <span class="state" :class="policy.active?'bg-main':'bg-dark-2'">
            {{policy.active?$t('vacation.activeLabel'):$t('vacation.inactiveLabel')}}
          </span>
          <h3>{{policy.title}}</h3>
        </div>
        <div class="card pb-4 mb-8">
          <div class="card__content grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2 pt-16 lg:pt-4">
            <div>
              <h4>{{$t('vacation.tableHeaders.accumulated')}}</h4>
              <span>{{policy.balance.accumulated}}</span>
            </div>
            <div>
              <h4>{{$t('vacation.tableHeaders.consumed')}}</h4>
              <span>{{policy.balance.consumed}}</span>
            </div>
            <div>
              <h4>{{$t('vacation.tableHeaders.requested')}}</h4>
              <span>{{policy.balance.requested}}</span>
            </div>
            <div>
              <h4>{{$t('vacation.tableHeaders.adjustment')}}</h4>
              <span>{{policy.balance.adjustment}}</span>
            </div>
            <div>
              <h4>{{$t('vacation.tableHeaders.available')}}</h4>
              <span>{{policy.balance.available}}</span>
            </div>
            <div>
              <h4>{{$t('vacation.tableHeaders.availableWithReservation')}}</h4>
              <span>{{policy.balance.availableWithReservation}}</span>
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
h3, h4{
  @apply text-dark-2;
}
span{
  @apply text-dark font-bold;
  &.state{
    @apply rounded-2xl p-1 text-center text-white w-20 text-xs;
    @media screen and (max-width:1024px){
      @apply absolute top-16 left-4;
    }
  }
}
.information-card{
  @media screen and (max-width:1024px){
    @apply card;
    .grid{
      @apply card__content;
    }
  }
}

</style>
