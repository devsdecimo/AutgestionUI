<template>
    <!-- container botones -->
    <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
        <button class="btn--main btn--small btn--outline">
            {{ $t('personalReferences.recordButton') }}
        </button>
        <button class="btn--main btn--small btn--outline">
            {{ $t('personalReferences.identificationButton') }}
        </button>
        <button class="btn--main btn--small">
            {{ $t('personalReferences.referencesButton') }}
        </button>

    </div>
    <div class="flex flex-col items-start content-center gap-10 px-6 md:mt-4">

        <!-- titulo -->
        <div>
            <h1 class="font-bold text-base hidden md:block leading-5">{{ $t('personalReferences.maintitle') }}</h1>
        </div>

        <!-- cards -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-10 w-full pb-10">
            <div class="card--shadow bg-white drop-shadow-lg rounded-3xl" v-for="(reference, index) in references" :key="index">
                <div class="card__content grid grid-cols-1 gap-6 pb-32 md:pb-14 pl-6">
                    <h3 class="text-base space-y-1">
                        <span class="block text-dark-2">{{ $t('personalReferences.reference') }}</span>
                        <span class="font-bold block">{{ reference.reference }}</span>
                    </h3>
                    <h3 class="text-base space-y-1">
                        <span class="block text-dark-2">{{ $t('personalReferences.phoneNumber') }}</span>
                        <span class="font-bold block">{{ reference.phone }}</span>
                    </h3>
                    <h3 class="text-base space-y-1">
                        <span class="block text-dark-2">{{ $t('personalReferences.description') }}</span>
                        <span class="font-bold block">{{ reference.description }}</span>
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