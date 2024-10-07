<template>
  <!-- container botones -->
  <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
    <a 
      class="btn--main btn--small btn--outline whitespace-nowrap" 
      href="/contract"
    >
      {{ $t('contract.contractBtn') }}
    </a>
    <a class="btn--main btn--small whitespace-nowrap">
      {{ $t('contract.asociationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.orgLocationBtn') }}
    </a>
    <a class="btn--main btn--small btn--outline whitespace-nowrap">
      {{ $t('contract.payMethodBtn') }}
    </a>
  </div>
  <div
    class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 content-center gap-10 px-6 md:mt-4 mb-12"
  >
    <PaymentCard />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { PaymentCard } from '@ventura/ui';
// Definimos los datos en el script del componente
const paymentData = reactive({
  
});
</script>