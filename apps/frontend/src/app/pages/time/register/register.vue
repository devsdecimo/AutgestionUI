<template>
  <div
    class="p-10 md:p-20 bg-white drop-shadow-lg rounded-3xl gap-10 w-full m-auto flex flex-col"
  >
    <Clock :timezone="selectedTimezone?.value || 'America/Costa_Rica'" />

    <div class="w-full xl:w-2/5 2xl:w-1/5 m-auto flex flex-col gap-10">
      <Dropdown
        :options="timezones"
        :icon="['fas', 'location-dot']"
        :value="selectedTimezone"
        @onOptionSelected="handleTimezoneChange"
        class="whitespace-nowrap"
      />

      <div class="w-full flex gap-16 justify-center">
        <!-- Botón CheckIn -->
        <button
          class="btn--main btn--small btn-outline whitespace-nowrap"
          :class="{ 'bg-dark-3': !isOptionSelected }"
          :disabled="!isOptionSelected"
          @click="handleCheckIn"
        >
          {{ $t('time.checkIn') }}
        </button>

        <!-- Botón CheckOut -->
        <button
          class="btn--main btn--small btn-outline whitespace-nowrap"
          :class="{ 'bg-dark-3': !isOptionSelected }"
          :disabled="!isOptionSelected"
          @click="handleCheckOut"
        >
          {{ $t('time.checkOut') }}
        </button>
      </div>

      <p class="text-center text-dark text-xl">{{ formattedDate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, Dropdown, DropdownOption } from '@ventura/ui';
import { ref } from 'vue';

const timezones = ref([
  { label: 'Costa Rica (GMT-6)', value: 'America/Costa_Rica' },
  { label: 'Nueva York (GMT-5)', value: 'America/New_York' },
  { label: 'Londres (GMT+1)', value: 'Europe/London' },
  { label: 'Tokio (GMT+9)', value: 'Asia/Tokyo' },
]);

const selectedTimezone = ref({ label: '', value: '' });

const isOptionSelected = ref(false);

const handleTimezoneChange = (
  option: { label: string; value: string } | null
) => {
  selectedTimezone.value = option;
  isOptionSelected.value = !!option;
};

const today = new Date();
const formattedDate = today.toLocaleDateString('es-CR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

const getFormattedTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString('es-CR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

// Función para crear el objeto JSON y enviarlo al API
const sendCheckAction = (actionType: string) => {
  const checkData = {
    date: formattedDate,
    time: getFormattedTime(),
    timezone: selectedTimezone.value.label,
    action: actionType, // 'CheckIn' o 'CheckOut'
  };

  console.log('Datos para enviar:', JSON.stringify(checkData));

  // Llamar al API aquí
};

// Funciones para CheckIn y CheckOut
const handleCheckIn = () => {
  sendCheckAction('CheckIn');
};

const handleCheckOut = () => {
  sendCheckAction('CheckOut');
};
</script>

<style scoped>
.btn--main:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
