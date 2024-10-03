<template>
  <!-- container botones -->
  <div class="flex gap-10 overflow-auto max-w-[100vw] px-10 py-5">
    <button class="btn--main btn--small">
        {{ $t('record.btn1') }}
    </button>
    <button class="btn--main btn--small btn--outline">
        {{ $t('record.btn2') }}
    </button>
    <button class="btn--main btn--small btn--outline">
        {{ $t('record.btn3') }}
    </button>
    
</div>
  <div class="flex flex-col items-start content-center gap-10 px-6 md:mt-4">

      <!-- titulo -->
      <div>
          <h1 class="font-bold text-base hidden md:block leading-5">{{ $t('record.maintitle') }}</h1>
      </div>

      <!-- formulario -->
      <div class="grid grid-cols-1 md:grid-cols-2 md:p-20 bg-transparent md:bg-white drop-shadow-lg rounded-3xl gap-10 w-full items-center md:items-start">
          <!-- Record Number -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="recordNumber">{{ $t('record.recordNumber') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="recordNumber" name="recordNumber" :value="formData.recordNumber" readonly/>
          </div>
          
          <!-- Employee Code -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="employeeCode">{{ $t('record.employeeCode') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="employeeCode" name="employeeCode" :value="formData.employeeCode" readonly/>
          </div>

          <!-- Opening Date -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="openingDate">{{ $t('record.openingDate') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="openingDate" name="openingDate" :value="formData.openingDate" readonly/>
          </div>

          <!-- Record State -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="recordState">{{ $t('record.recordState') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="recordState" name="recordState" :value="formData.recordState" readonly/>
          </div>

          <!-- Employee Name -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="employeeName">{{ $t('record.employeeName') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="employeeName" name="employeeName" :value="formData.employeeName" readonly/>
          </div>

          <!-- Identification -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="identification">{{ $t('record.identification') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="identification" name="identification" :value="formData.identification" readonly/>
          </div>

          <!-- Civil Status -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="civilStatus">{{ $t('record.civilStatus') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="civilStatus" name="civilStatus" :value="formData.civilStatus" readonly/>
          </div>

          <!-- Citizenship -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="citizenship">{{ $t('record.citizenship') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="citizenship" name="citizenship" :value="formData.citizenship" readonly/>
          </div>

          <!-- Phone Number -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="phoneNumber">{{ $t('record.phoneNumber') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="phoneNumber" name="phoneNumber" :value="formData.phoneNumber" readonly/>
          </div>

          <!-- Mobile Phone Number -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="mobilePhoneNumber">{{ $t('record.mobilePhoneNumer') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="mobilePhoneNumber" name="mobilePhoneNumber" :value="formData.mobilePhoneNumer" readonly/>
          </div>

          <!-- Address -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="address">{{ $t('record.address') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="address" name="address" :value="formData.address" readonly/>
          </div>

          <!-- Email -->
          <div class="flex flex-col items-start justify-center gap-5">
              <label class="text-dark-2 text-base font-normal leading-7" for="email">{{ $t('record.email') }}</label>
              <input class="!border-dark-4 !bg-white hover:cursor-default !font-bold text-base !w-5/6 md:w-full" type="text" id="email" name="email" :value="formData.email" readonly/>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// Definimos los datos en el script del componente
const formData = reactive({
recordNumber: '1270',
employeeCode: '111111263',
openingDate: '01/09/14',
recordState: 'Activo',
employeeName: 'Jorge Trejos Castro',
identification: '111111263',
civilStatus: 'Casado (a) - Sin Créditos Fiscales',
citizenship: 'Costarricense',
phoneNumber: '0000-0000',
mobilePhoneNumer: '0000-0000',
address: 'Calle Lorem, Avenida Ipsum 40',
email: 'jorge.trejos@correo.com'
});
</script>
