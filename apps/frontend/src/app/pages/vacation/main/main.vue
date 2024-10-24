<script setup lang="ts">
//Data
const data = {
  employeeInformation: {
    name: 'Jorge Trejos Castro',
    code: '111111263',
    position: 'Goodpack Administrativo',
  },
  balance: {
    accumulated: '0.00',
    consumed: '0.00',
    requested: '0.00',
    adjustment: '0.00',
    available: '0.00',
    availableWithReservation: '0.00',
  },
  typesOfPolicy: [
    {
      active: true,
      title: 'Vacaciones de Ley',
      balance: {
        accumulated: '0.00',
        consumed: '0.00',
        requested: '0.00',
        adjustment: '0.00',
        available: '0.00',
        availableWithReservation: '0.00',
      },
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
      },
    },
  ],
};
</script>

<template>
  <section>
    <h2 class="general-title">{{ $t('vacation.subtitles.information') }}</h2>
    <div class="information-card">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2">
        <div>
          <h4 class="general-text">
            {{ $t('vacation.informationLabels.name') }}
          </h4>
          <span class="general-title">{{ data.employeeInformation.name }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.informationLabels.code') }}
          </h4>
          <span class="general-title">{{ data.employeeInformation.code }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.informationLabels.position') }}
          </h4>
          <span class="general-title">{{
            data.employeeInformation.position
          }}</span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2 class="general-title">{{ $t('vacation.subtitles.balance') }}</h2>
    <div class="card pb-8">
      <div class="card__content grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2">
        <div>
          <h4 class="general-text">
            {{ $t('vacation.tableHeaders.accumulated') }}
          </h4>
          <span class="general-title">{{ data.balance.accumulated }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.tableHeaders.consumed') }}
          </h4>
          <span class="general-title">{{ data.balance.consumed }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.tableHeaders.requested') }}
          </h4>
          <span class="general-title">{{ data.balance.requested }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.tableHeaders.adjustment') }}
          </h4>
          <span class="general-title">{{ data.balance.adjustment }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.tableHeaders.available') }}
          </h4>
          <span class="general-title">{{ data.balance.available }}</span>
        </div>
        <div>
          <h4 class="general-text">
            {{ $t('vacation.tableHeaders.availableWithReservation') }}
          </h4>
          <span class="general-title">{{
            data.balance.availableWithReservation
          }}</span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2 class="general-title">{{ $t('vacation.subtitles.typeOfPolicy') }}</h2>
    <div
      v-for="(policy, index) in data.typesOfPolicy"
      :key="index"
      class="relative"
    >
      <div class="flex items-center gap-4 pb-4">
        <span
          class="general-title state"
          :class="policy.active ? 'bg-main' : 'bg-dark-2'"
        >
          {{
            policy.active
              ? $t('vacation.activeLabel')
              : $t('vacation.inactiveLabel')
          }}
        </span>
        <h3 class="general-text">{{ policy.title }}</h3>
      </div>
      <div class="card pb-4 mb-8">
        <div
          class="card__content grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-2 pt-16 lg:pt-4"
        >
          <div>
            <h4 class="general-text">
              {{ $t('vacation.tableHeaders.accumulated') }}
            </h4>
            <span class="general-title">{{ policy.balance.accumulated }}</span>
          </div>
          <div>
            <h4 class="general-text">
              {{ $t('vacation.tableHeaders.consumed') }}
            </h4>
            <span class="general-title">{{ policy.balance.consumed }}</span>
          </div>
          <div>
            <h4 class="general-text">
              {{ $t('vacation.tableHeaders.requested') }}
            </h4>
            <span class="general-title">{{ policy.balance.requested }}</span>
          </div>
          <div>
            <h4 class="general-text">
              {{ $t('vacation.tableHeaders.adjustment') }}
            </h4>
            <span class="general-title">{{ policy.balance.adjustment }}</span>
          </div>
          <div>
            <h4 class="general-text">
              {{ $t('vacation.tableHeaders.available') }}
            </h4>
            <span class="general-title">{{ policy.balance.available }}</span>
          </div>
          <div>
            <h4 class="general-text">
              {{ $t('vacation.tableHeaders.availableWithReservation') }}
            </h4>
            <span class="general-title">{{
              policy.balance.availableWithReservation
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
h2 {
  @apply pb-8;
}
span {
  &.state {
    @apply rounded-2xl p-1 text-center text-white w-20 text-xs;
    @media screen and (max-width: 1024px) {
      @apply absolute top-16 left-4;
    }
  }
}
.information-card {
  @media screen and (max-width: 1024px) {
    @apply card;
    .grid {
      @apply card__content;
    }
  }
}
</style>
