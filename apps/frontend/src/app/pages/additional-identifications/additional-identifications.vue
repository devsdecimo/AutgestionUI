<template>
    <!-- container botones -->
    <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
        <button class="btn--main btn--small btn--outline">
            {{ $t('additionalIndentifications.recordButton') }}
        </button>
        <button class="btn--main btn--small">
            {{ $t('additionalIndentifications.identificationButton') }}
        </button>
        <button class="btn--main btn--small btn--outline">
            {{ $t('additionalIndentifications.referencesButton') }}
        </button>

    </div>
    <div class="flex flex-col items-start content-center gap-10 px-6 md:mt-4">

        <!-- titulo -->
        <div>
            <h1 class="font-bold text-base hidden md:block leading-5">{{ $t('additionalIndentifications.maintitle') }}</h1>
        </div>

        <!-- cards -->

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 w-full pb-10">
            <div class="card--shadow" v-for="(id, index) in identifications" :key="index">
                <div class="card__content grid grid-cols-1 gap-6 pb-32 md:grid-cols-2 md:pb-14 pl-6">
                    <h3 class="text-base space-y-1">
                        <span class="block text-dark-2">{{ $t('additionalIndentifications.identificationType') }}</span>
                        <span class="font-bold block">{{ id.type }}</span>
                    </h3>
                    <h3 class="text-base space-y-1">
                        <span class="block text-dark-2">{{ $t('additionalIndentifications.identificationNumber') }}</span>
                        <span class="font-bold block">{{ id.number }}</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const identifications = reactive([
  { type: 'Licencia de Conducir', number: '1852874888' },
  { type: 'Cédula', number: '111111263' },
  { type: 'Pasaporte', number: 'Z1234567' }
]);
</script>