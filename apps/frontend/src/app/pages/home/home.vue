<script setup lang="ts">
// Types
import { DropdownCard } from '@ventura/ui';

//Data
const data = {
  person:{
    position: 'Charlene Reed',
    baseSalary: '897,580.74',
    schedule: 'Tiempo Completo'
  },
  contract:{
    contractNumber: '1714',
    state: 'Activo',
    openingDate: '01/10/23'
  },
  record:{
    recordNumber: '1270',
    employeeCode: '111111263',
    openingDate: '01/09/14'
  }
}

</script>

<template>
  <div class="main-container">
    <div class="md:card--shadow md:p-10">
      <div class="main-container__header">
        <h2>{{ $t('home.title') }}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 md:p-10">
        <DropdownCard :title="$t('home.person.title')" :icon="['fas', 'user']" :sections="[
    { title: $t('home.person.header1'), content: data.person.position },
    { title: $t('home.person.header2'), content: data.person.baseSalary },
    { title: $t('home.person.header3'), content: data.person.schedule },
  ]" link="/person" :buttonText="$t('home.buttonText')" ></DropdownCard>
        <DropdownCard :title="$t('home.contract.title')" :icon="['fas', 'address-card']" :sections="[
    { title: $t('home.contract.header1'), content: data.contract.contractNumber },
    { title: $t('home.contract.header2'), content: data.contract.state },
    { title: $t('home.contract.header3'), content: data.contract.openingDate },
  ]" link="/contract" :buttonText="$t('home.buttonText')"></DropdownCard>
        <DropdownCard :title="$t('home.record.title')" :icon="['fas', 'folder']" :sections="[
    { title: $t('home.record.header1'), content: data.record.recordNumber },
    { title: $t('home.record.header2'), content: data.record.employeeCode },
    { title: $t('home.record.header3'), content: data.record.openingDate },
  ]" link="/record" :buttonText="$t('home.buttonText')"></DropdownCard>
      </div>
    </div>
  </div>

</template>

<style scoped lang="postcss">
.main-container{
  @apply p-10;
  &__header{
    @apply border-b border-light;
    h2{
      @apply text-main font-bold text-sm pb-3 pl-2;
    }
    &::after {
      @apply block w-28 h-0.5 bg-main relative bottom-0 left-0;
      content: '';
    }
  }
}
</style>
