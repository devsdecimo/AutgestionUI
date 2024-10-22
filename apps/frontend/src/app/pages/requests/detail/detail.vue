<template>
  <div class="main-container">
    <!-- titulo -->
    <div class="flex flex-col gap-6 justify-center md:justify-start">
      <h1 class="general-title hidden md:block">{{ $t('requests.mainTitle') }}</h1>
      <h4 class="general-text text-center md:text-start">{{ $t('requests.searchOptions') }}</h4>
    </div>
    <div class="w-full gap-16 grid grid-cols-1 lg:grid-cols-10">
      <!-- filtros -->
      <div class="card w-full lg:w-auto col-span-1 lg:col-span-3">
        <form class="filter-form" @submit.prevent="handleSubmit">
          <div class="card__content flex flex-col gap-6">
            <div class="flex flex-col">
              <label for="reason">
                {{ $t('requests.reason') }}
              </label>
              <input type="text" id="reason" name="reason" v-model="formData.reason">
            </div>
            <div class="flex flex-col">
              <label for="requestNumber">{{
                  $t('requests.requestNumberFilter') }}</label>
              <input
                type="number" id="requestNumber" name="requestNumber" :value="formData.requestNumber">
            </div>
            <div class="flex flex-col">
              <label for="registerDate">
                {{ $t('requests.registerDate') }}
              </label>
              <input
                type="date" id="registerDate" name="registerDate" v-model="formData.registerDate">
            </div>
            <div class="flex flex-col">
              <label for="state">
                {{ $t('requests.state') }}
              </label>
              <select
                class="select h-full"
                type="select" id="state" name="state" v-model="formData.state">
                <option selected :value="true">{{ $t('requests.opened') }}</option>
                <option :value="false">{{ $t('requests.closed') }}</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="description">
                {{ $t('requestDetail.description') }}
              </label>
              <textarea id="description" name="description" v-model="formData.description" />
            </div>
            <div class="text-right">
              <button class="btn--main font-semibold">
                {{ $t('requests.search') }}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-span-1 lg:col-span-7 card w-full font-mulish">
        <div class="card__content">
          <div class="chat max-h-full">
            <div class="chat__messages p-6">
              <div class="overflow-x-auto">
                <div v-for="chatMessage in chatMessages"
                   :key="chatMessage.userID"
                   :class="chatMessage.userID==loggedUserID?'items-end':'items-start'"
                   class="flex flex-col gap-2 mb-3"
                >
                <span>{{ chatMessage.userName }}</span>
                <div class="rounded-2xl text-white p-2 w-4/5" :class="chatMessage.userID==loggedUserID?'bg-dark-3':'bg-main'">
                  {{ chatMessage.message }}
                </div>
              </div>
              </div>
            </div>
            <div class="chat__send">
              <form class="flex gap-3 justify-between items-end w-full">
                <div class="flex-grow">
                  <label class="text-base mb-3 block text-dark-2">{{ $t('requestDetail.message') }}</label>
                  <input type="text">
                </div>
                <button type="submit" class="btn--main btn--small font-bold font-inter">{{ $t('requestDetail.send') }}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';

// Definimos los datos en el script del componente
const formData = reactive({
  reason: 'Otras Gestiones',
  requestNumber: '',
  registerDate: '',
  state: false,
  description: ''
});

const chatMessages = reactive([
  { messageID:1, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:2, userID:11, userName: 'Usuario 02', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:3, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:1, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:2, userID:11, userName: 'Usuario 02', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:3, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:1, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:2, userID:11, userName: 'Usuario 02', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:3, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:1, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:2, userID:11, userName: 'Usuario 02', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  { messageID:3, userID:10, userName: 'Usuario 01', message: 'Lorem ipsum dolor sit amet consectetur. Scelerisque parturient ut.'},
  ])
//Variable de prueba para simular chat. Seria el ID del usuario logueado
const loggedUserID = 11;


</script>
<style scoped lang="postcss">
.chat{
  @apply rounded-3xl w-full h-full overflow-hidden border border-dark-4;
  &__messages{
    @apply bg-light-4 h-4/5 w-full border overflow-x-hidden h-[550px];
  }
  &__send{
    @apply p-4 flex items-center w-full;
  }
}
</style>
