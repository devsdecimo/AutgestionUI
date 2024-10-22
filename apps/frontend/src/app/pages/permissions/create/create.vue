<template>
    <!-- container botones -->
  <div class="submenu-container">
    <a class="submenu-container__item btn--small" href="/permissions">
        {{ $t('permissionsCreate.applicationBtn') }}
    </a>
    <a class="submenu-container__item btn--small btn--outline" href="/permissions/resolutions">
        {{ $t('permissionsCreate.resolutionBtn') }}
    </a>
</div>
    <div class="main-container">

        <!-- titulo -->
        <div class="flex flex-col gap-6">
            <h1 class="general-title hidden md:block">{{ $t('permissionsCreate.mainTitle') }}</h1>
        </div>
        <div class="card w-full p-16">
            <form class="input-form" @submit.prevent="handleSubmit">
                <h6 class="general-title mb-12">{{ $t('permissionsCreate.createApplication') }}</h6>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 w-full">
                    <div class="flex flex-col">
                        <label for="personalActionType">{{
                            $t('permissionsCreate.personalActionType') }}</label>
                        <input type="text" id="actionType" name="actionType" v-model="formData.actionType" />
                    </div>
                    <div class="flex flex-col">
                        <label for="time">{{
                            $t('permissionsCreate.time') }}</label>
                        <input type="time" id="time-input" v-model="formData.time" step="900" min="00:00" max="23:59" />
                    </div>
                    <div class="flex flex-col">
                        <label for="startDate">{{
                            $t('permissionsCreate.startDate') }}</label>
                  <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="startDate" name="startDate" v-model="formData.startDate" />
                    </div>
                    <div class="flex flex-col">
                        <label for="reentryDate">{{
                            $t('permissionsCreate.reentryDate') }}</label>
                  <FormattableDateField :datePattern="dateFormat" :placeholder="datePlaceholder" class="!border-dark-4 !bg-white !text-dark-2 !font-normal text-base w-full md:w-full"   id="reentryDate" name="reentryDate" v-model="formData.reentryDate" />
                    </div>
                    <div class="col-span-full flex flex-col gap-y-6">
                        <div class="flex flex-col items-start justify-center gap-1">
                            <label class="text-dark-2 text-base font-normal leading-7" for="justification">{{
                                $t('permissionsCreate.justification') }}</label>
                            <input id="justification" name="justification" v-model="formData.justification" >
                        </div>
                        <div class="flex flex-col md:flex-row gap-6">
                          <div class="w-full md:w-2/3">
                            <FilePicker
                              v-bind="{
                                boxLabel:$t('permissionsCreate.boxLabel'),
                                uploadFileLabel: $t('permissionsCreate.uploadFileLabel'),
                                fileLabel: $t('permissionsCreate.fileLabel'),
                                stateLabel: $t('permissionsCreate.stateLabel'),
                                cancelBtnLabel:$t('permissionsCreate.cancelBtnLabel'),
                                saveBtnLabel: $t('permissionsCreate.saveBtnLabel'),
                                alertSuccessTitle: $t('permissionsCreate.alertSuccessTitle'),
                                alertSuccessText: $t('permissionsCreate.alertSuccessText'),

                              }"
                            />
                          </div>
                          <button type="submit" class="btn--main font-semibold md:ml-auto">
                            {{ $t('permissionsCreate.sendApplication') }}
                          </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import { FilePicker, FormattableDateField } from '@ventura/ui'

const dateFormat = localStorage.getItem('dateFormat');
const datePlaceholder = localStorage.getItem('datePlaceholder');
// Definimos los datos en el script del componente
const formData = reactive({
    actionType: 'Día Libre',
    time: '00:00',
    startDate: '01/09/24',
    reentryDate: '03/09/24',
    justification: 'Lorem ipsum dolor sit amet consectetur.',
});

</script>

