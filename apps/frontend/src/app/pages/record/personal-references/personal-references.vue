<template>
    <!-- container botones -->
    <div class="submenu-container">
        <a class="submenu-container__item btn--small btn--outline" href="/record">
            {{ $t('personalReferences.recordButton') }}
        </a>
        <a class="submenu-container__item btn--small btn--outline" href="/record/additional-identifications">
            {{ $t('personalReferences.identificationButton') }}
        </a>
        <a class="submenu-container__item btn--small" href="/record/personal-references">
            {{ $t('personalReferences.referencesButton') }}
        </a>

    </div>
    <div class="main-container">

        <!-- titulo -->
      <h1 class="general-title">{{ $t('personalReferences.maintitle') }}</h1>

        <!-- cards -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-10 w-full pb-10">
            <div class="card" v-for="(reference, index) in references" :key="index">
                <div class="card__content grid grid-cols-1 gap-6 pb-32 md:pb-14 pl-6">
                    <h3 class="text-base space-y-1">
                        <span class="block general-text">{{ $t('personalReferences.reference') }}</span>
                        <span class="general-title block">{{ reference.reference }}</span>
                    </h3>
                    <h3 class="text-base space-y-1">
                        <span class="block general-text">{{ $t('personalReferences.phoneNumber') }}</span>
                        <span class="general-title block">{{ reference.phone }}</span>
                    </h3>
                    <h3 class="text-base space-y-1">
                        <span class="block general-text">{{ $t('personalReferences.description') }}</span>
                        <span class="general-title block">{{ reference.description }}</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const references = reactive([
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
    { reference: 'Jane Doe', phone: '555-555-5555', description: 'Esposa' },
]);
</script>
