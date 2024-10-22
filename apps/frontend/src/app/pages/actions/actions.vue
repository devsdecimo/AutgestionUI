<template>
    <div class="main-container">

        <!-- titulo -->
        <div class="flex flex-col gap-6">
            <h1 class="general-title hidden md:block">{{ $t('actions.mainTitle') }}</h1>
            <p class="general-text">{{ $t('actions.searchOptions') }}</p>
        </div>

        <div class="card w-full p-6">
          <form class="filter-form" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative">
            <div class="flex flex-col">
                <label for="personalActionType">{{
                    $t('actions.personalActionType')
                    }}</label>
                <select
                    class="select h-full"
                    type="personalActionType" id="personalActionType" name="personalActionType"
                    v-model="formData.personalActionType">
                    <option selected :value="15">{{ $t('actions.fortnightly') }}</option>
                    <option :value="30">{{ $t('actions.monthly') }}</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="startDate">{{
                    $t('actions.startDate') }}</label>
                    <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="formData.startDate" />
            </div>
            <div class="flex flex-col">
                <label for="endDate">{{
                    $t('actions.endDate') }}</label>
                <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="endDate" name="endDate" v-model="formData.endDate" />
            </div>

            <div class="right-0 bottom-0 lg:absolute text-center">
                <button class="btn--main font-semibold">
                    {{ $t('actions.search') }}
                </button>
            </div>
            </div>
          </form>
        </div>

        <!-- cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          <div class="card"  v-for="(action, index) in actions" :key="index">
            <div class="card__content gap-6 flex flex-col">
                <div>
                    <p class="general-text">{{ $t('actions.personalActionNumber') }}</p>
                    <p class="general-title">{{ action.personalActionNumber }}</p>
                </div>
                <div>
                    <p class="general-text">{{ $t('actions.personalActionType') }}</p>
                    <p class="general-title">{{ action.personalActionType }}</p>
                </div>
                <div>
                    <p class="general-text">{{ $t('actions.personalActionState') }}</p>
                    <p class="general-title">{{ action.personalActionState }}</p>
                </div>
                <div>
                    <p class="general-text">{{ $t('actions.registerDate') }}</p>
                    <p class="general-title">{{ action.registerDate }}</p>
                </div>
                <div>
                    <p class="general-text">{{ $t('actions.effectiveDate') }}</p>
                    <p class="geneeral-title">{{ action.effectiveDate }}</p>
                </div>
                <div>
                    <p class="general-text">{{ $t('actions.remarks') }}</p>
                    <p class="general-title">{{ action.remarks }}</p>
                </div>
            </div>
          </div>

        </div>
    </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { FormattableDateField } from '@ventura/ui';

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');

// Definimos los datos en el script del componente
const formData = reactive({
    personalActionType: 15,
    startDate: '',
    endDate: '',
});

const actions = reactive([
    { personalActionNumber: '1775', personalActionType: 'Aumento Salarial Extraordinario', personalActionState: 'Aplicada en Nómina', registerDate: '01/02/2024', effectiveDate: '01/02/2024', remarks: 'Lorem ipsum dolor sit amet consectetur. Est sit ac faucibus aliquam odio pellentesque. Vitae in ullamcorper vel posuere nulla.' },
    { personalActionNumber: '1775', personalActionType: 'Aumento Salarial Extraordinario', personalActionState: 'Aplicada en Nómina', registerDate: '01/02/2024', effectiveDate: '01/02/2024', remarks: 'Lorem ipsum dolor sit amet consectetur. Est sit ac faucibus aliquam odio pellentesque. Vitae in ullamcorper vel posuere nulla.' },
    { personalActionNumber: '1775', personalActionType: 'Aumento Salarial Extraordinario', personalActionState: 'Aplicada en Nómina', registerDate: '01/02/2024', effectiveDate: '01/02/2024', remarks: 'Lorem ipsum dolor sit amet consectetur. Est sit ac faucibus aliquam odio pellentesque. Vitae in ullamcorper vel posuere nulla.' },
    { personalActionNumber: '1775', personalActionType: 'Aumento Salarial Extraordinario', personalActionState: 'Aplicada en Nómina', registerDate: '01/02/2024', effectiveDate: '01/02/2024', remarks: 'Lorem ipsum dolor sit amet consectetur. Est sit ac faucibus aliquam odio pellentesque. Vitae in ullamcorper vel posuere nulla.' },
    { personalActionNumber: '1775', personalActionType: 'Aumento Salarial Extraordinario', personalActionState: 'Aplicada en Nómina', registerDate: '01/02/2024', effectiveDate: '01/02/2024', remarks: 'Lorem ipsum dolor sit amet consectetur. Est sit ac faucibus aliquam odio pellentesque. Vitae in ullamcorper vel posuere nulla.' },
    { personalActionNumber: '1775', personalActionType: 'Aumento Salarial Extraordinario', personalActionState: 'Aplicada en Nómina', registerDate: '01/02/2024', effectiveDate: '01/02/2024', remarks: 'Lorem ipsum dolor sit amet consectetur. Est sit ac faucibus aliquam odio pellentesque. Vitae in ullamcorper vel posuere nulla.' },
])

</script>
