<template>
    <!-- container botones -->
    <div class="submenu-container">
        <a class="submenu-container__item btn--small btn--outline" href="/record">
            {{ $t('additionalIndentifications.recordButton') }}
        </a>
        <a class="submenu-container__item btn--small" href="/record/additional-identifications">
            {{ $t('additionalIndentifications.identificationButton') }}
        </a>
        <a class="submenu-container__item btn--small btn--outline" href="/record/personal-references">
            {{ $t('additionalIndentifications.referencesButton') }}
        </a>

    </div>
    <div class="main-container">

        <!-- titulo -->
      <h1 class="general-title">{{ $t('additionalIndentifications.maintitle') }}</h1>


        <!-- cards -->

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 w-full pb-10">
            <div class="card" v-for="(id, index) in identifications" :key="index">
                <div class="card__content grid grid-cols-1 gap-6 pb-32 md:grid-cols-2 md:pb-14 pl-6">
                    <h3 class="text-base space-y-1">
                        <span class="block general-text">{{ $t('additionalIndentifications.identificationType') }}</span>
                        <span class="general-title block">{{ id.type }}</span>
                    </h3>
                    <h3 class="text-base space-y-1">
                        <span class="block general-text">{{ $t('additionalIndentifications.identificationNumber') }}</span>
                        <span class="general-title block">{{ id.number }}</span>
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
