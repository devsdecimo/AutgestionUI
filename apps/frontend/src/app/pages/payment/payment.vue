<template>
  <!-- container botones -->
  <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
    <a
      class="btn--main btn--small btn--outline whitespace-nowrap"
      href="/contract"
    >
      {{ $t('contract.contractBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.asociationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.orgLocationBtn') }}
    </a>
    <a class="btn--main btn--small whitespace-nowrap">
      {{ $t('contract.payMethodBtn') }}
    </a>
  </div>
  <div class="p-4 md:p-10">
    <div class="col-span-12 p-2">
      <h1 class="font-bold text-base leading-5">
        {{ $t('payment.titlePaymentMethod') }}
      </h1>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-12 gap-8 py-10">
      <PaymentCard class="col-span-6" v-for="payMethod in paymentData.paymentMethods" v-bind="payMethod"/>
    </div>
    <div class="col-span-12 p-2">
      <h1 class="font-bold text-base leading-5">
        {{ $t('payment.titleSalaryComposition') }}
      </h1>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-12 gap-8 py-10">
      <SalaryCompositionCard class="col-span-12"  v-for="salaryComposition in paymentData.slaryCompositions" v-bind="salaryComposition"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { PaymentCard, SalaryCompositionCard } from '@ventura/ui';
// Definimos los datos en el script del componente
const paymentData = reactive({
  paymentMethods: [
    {
      name: 'Transferencia',
      bank: 'Banco de Costa Rica',
      currency: 'Colones',
      account: 'CR02015202001159781714',
    },
    {
      name: 'Transferencia',
      bank: 'Banco Nacional',
      currency: 'Dólares',
      account: 'CR02015202001159781718',
    },
  ],
  slaryCompositions: [
    {
      concept: 'Salario Base Contrato',
      currency: 'Colones',
      percent: '100.00',
      unit: 'Mensual',
      value: 100000,
    },
    {
      concept: 'Salario X Contrato',
      currency: 'Colones',
      percentage: '25.00',
      unit: 'Semanal',
      value: 25000,
      type: 'dark-2'
    },
  ],
});
</script>
