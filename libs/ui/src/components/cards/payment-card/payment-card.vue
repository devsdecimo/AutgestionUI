<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { PaymentCardProps } from '../../../types/cards/payment-card';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<PaymentCardProps>(), {
  name: 'Transferencia',
  bank: 'Banco de Costa Rica',
  currency: 'Colones',
  account: 'CR02015202001159781714'
});

const currencyIconConfig = {
  'Colones': {
    icon : ['fas', 'colon-sign'] ,
  },
  'Dólares': {
    icon : ['fas', 'dollar-sign'] ,
  },
}
</script>

<template>
  <div class="payment-card">
    <div class="payment-card__content">
      <div class="flex items-start space-x-4">
        <div class="text-sm grow space-y-2">
          <div>
            <span class="payment-card__title">Forma de Pago</span>
            <span class="payment-card__info">{{name}}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span class="payment-card__title">Banco</span>
              <span class="payment-card__info">{{bank}}</span>
            </div>
            <div>
              <span class="payment-card__title">Moneda</span>
              <span class="payment-card__info">{{currency}}</span>
            </div>
          </div>
        </div>
        <div class="icon-pill--main">
          <FontAwesomeIcon :icon="currencyIconConfig[currency].icon" />
        </div>
      </div>
    </div>
    <div class="card__footer text-sm">
      <span class="payment-card__title">Cuenta</span>
      <span class="payment-card__info">{{account}}</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

.payment-card{

  @apply  col-span-3 card card--shadow;
  &__content{
    @apply card__content space-y-4;
  }
  &__title{
    @apply block text-dark-4;
  }
  &__info{
    @apply block font-medium;
  }
}
</style>
