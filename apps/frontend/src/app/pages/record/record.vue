<template>
  <!-- container botones -->
  <div class="submenu-container">
    <a class="submenu-container__item btn--small" href="/record">
        {{ $t('record.recordButton') }}
    </a>
    <a class="submenu-container__item btn--small btn--outline" href="/record/additional-identifications">
        {{ $t('record.identificationButton') }}
    </a>
    <a class="submenu-container__item btn--small btn--outline" href="/record/personal-references">
        {{ $t('record.referencesButton') }}
    </a>

</div>
  <div class="main-container">

      <!-- titulo -->
    <h1 class="general-title hidden md:block">{{ $t('record.maintitle') }}</h1>

      <!-- formulario -->
    <div class="md:card input-form w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 md:p-10 lg:p-20 gap-10 items-center md:items-start">
          <!-- Record Number -->
          <div class="flex flex-col">
              <label for="recordNumber">{{ $t('record.recordNumber') }}</label>
              <input type="text" id="recordNumber" name="recordNumber" :value="formData.recordNumber" readonly/>
          </div>

          <!-- Employee Code -->
          <div class="flex flex-col">
              <label for="employeeCode">{{ $t('record.employeeCode') }}</label>
              <input type="text" id="employeeCode" name="employeeCode" :value="formData.employeeCode" readonly/>
          </div>

          <!-- Opening Date -->
          <div class="flex flex-col">
              <label for="openingDate">{{ $t('record.openingDate') }}</label>
              <input type="text" id="openingDate" name="openingDate" :value="formData.openingDate" readonly/>
          </div>

          <!-- Record State -->
          <div class="flex flex-col">
              <label for="recordState">{{ $t('record.recordState') }}</label>
              <input type="text" id="recordState" name="recordState" :value="formData.recordState" readonly/>
          </div>

          <!-- Employee Name -->
          <div class="flex flex-col">
              <label for="employeeName">{{ $t('record.employeeName') }}</label>
              <input type="text" id="employeeName" name="employeeName" :value="formData.employeeName" readonly/>
          </div>

          <!-- Identification -->
          <div class="flex flex-col">
              <label for="identification">{{ $t('record.identification') }}</label>
              <input type="text" id="identification" name="identification" :value="formData.identification" readonly/>
          </div>

          <!-- Civil Status -->
          <div class="flex flex-col">
              <label for="civilStatus">{{ $t('record.civilStatus') }}</label>
              <input type="text" id="civilStatus" name="civilStatus" :value="formData.civilStatus" readonly/>
          </div>

          <!-- Citizenship -->
          <div class="flex flex-col">
              <label for="citizenship">{{ $t('record.citizenship') }}</label>
              <input type="text" id="citizenship" name="citizenship" :value="formData.citizenship" readonly/>
          </div>

          <!-- Phone Number -->
          <div class="flex flex-col">
              <label for="phoneNumber">{{ $t('record.phoneNumber') }}</label>
              <input type="text" id="phoneNumber" name="phoneNumber" :value="formData.phoneNumber" readonly/>
          </div>

          <!-- Mobile Phone Number -->
          <div class="flex flex-col">
              <label for="mobilePhoneNumber">{{ $t('record.mobilePhoneNumer') }}</label>
              <input type="text" id="mobilePhoneNumber" name="mobilePhoneNumber" :value="formData.mobilePhoneNumer" readonly/>
          </div>

          <!-- Address -->
          <div class="flex flex-col">
              <label for="address">{{ $t('record.address') }}</label>
              <input type="text" id="address" name="address" :value="formData.address" readonly/>
          </div>

          <!-- Email -->
          <div class="flex flex-col">
              <label for="email">{{ $t('record.email') }}</label>
              <input type="text" id="email" name="email" :value="formData.email" readonly/>
          </div>
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
