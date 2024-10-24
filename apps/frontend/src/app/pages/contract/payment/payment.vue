<template>
  <h1 class="general-title">
    {{ $t('payment.titlePaymentMethod') }}
  </h1>
  <div class="grid grid-cols-3 lg:grid-cols-12 gap-8 w-full">
    <PaymentCard
      v-for="(payMethod, index) in paymentData.paymentMethods"
      v-bind="payMethod"
      :key="index"
      class="col-span-3 lg:col-span-6"
      :labels="{
        name: $t('payment.labels.paymentMethod'),
        bank: $t('payment.labels.bank'),
        currency: $t('payment.labels.currency'),
        account: $t('payment.labels.account'),
      }"
    />
  </div>
  <h2 class="general-title">
    {{ $t('payment.titleSalaryComposition') }}
  </h2>
  <div class="grid grid-cols-3 md:grid-cols-12 gap-8 pb-10 w-full">
    <SalaryCompositionCard
      v-for="(salaryComposition, index) in paymentData.slaryCompositions"
      v-bind="salaryComposition"
      :key="index"
      class="col-span-12"
      :labels="{
        concept: $t('payment.labels.concept'),
        currency: $t('payment.labels.currency'),
        percent: $t('payment.labels.percentage'),
        unit: $t('payment.labels.unit'),
        value: $t('payment.labels.value'),
      }"
    />
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
      type: 'dark-2',
    },
  ],
});
</script>
