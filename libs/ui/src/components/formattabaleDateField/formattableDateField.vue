<script setup lang="ts">
import { ref, onMounted, defineEmits, watch } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

// Recibe el valor inicial del v-model
const props = defineProps<{
  modelValue: string,
  placeholder?: string,
  datePattern?: string,  // Para visualizar el formato amigable
}>();

// Para emitir eventos del v-model
const emit = defineEmits(['update:modelValue']);

// Variables reactivas
const displayDate = ref<string>('');  // Mostrar formato amigable
const internalDate = ref<string>(props.modelValue || '');  // Guardar valor en formato ISO (YYYY-MM-DD)
const inputEl = ref<HTMLInputElement | null>(null);  // Referencia al input visible
let isInternalChange = false;  // Bandera para evitar doble actualización

// Función para formatear la fecha de acuerdo al patrón definido
const formatToDisplay = (date: Date, pattern: string): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');  // Mes en JS es de 0 a 11
  const year = date.getFullYear();

  // Sustituir los placeholders 'd', 'm', 'Y' por los valores correspondientes
  return pattern.replace('d', day).replace('m', month).replace('Y', String(year));
};

// Función para convertir una fecha a formato universal (ISO 8601)
const formatToUniversal = (date: Date): string => {
  return date.toISOString().split('T')[0];  // Formato 'YYYY-MM-DD'
};

// Sincronizar cambios cuando el valor de v-model cambie desde el exterior
watch(() => props.modelValue, (newValue) => {
  if (isInternalChange) {
    isInternalChange = false;  // Si es un cambio interno, lo ignoramos
    return;
  }
  internalDate.value = newValue;
  if (newValue) {
    displayDate.value = formatToDisplay(new Date(newValue), props.datePattern || 'd-m-Y');
  }
});

// Inicializar flatpickr
const initializeFlatpickr = () => {
  if (inputEl.value) {
    flatpickr(inputEl.value, {
      dateFormat: props.datePattern || 'd-m-Y',
      allowInput: true,
      disableMobile: "true",
      locale: locale.value === 'es' ? {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
          longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        },
        months: {
          shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        },
      } : {},
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          const date = selectedDates[0];
          displayDate.value = formatToDisplay(date, props.datePattern || 'd-m-Y');  // Mostrar formato amigable
          internalDate.value = formatToUniversal(date);  // Guardar en formato ISO
          isInternalChange = true;  // Marca como cambio interno para no disparar watch
          emit('update:modelValue', internalDate.value);  // Emitir valor en formato ISO (YYYY-MM-DD)
        }
      },
    });
  }
};

// Función para manejar la entrada manual
const handleInput = (event: Event) => {
  if (event.target) {
    const value = (event.target as HTMLInputElement).value;
    displayDate.value = value;
    // Convertir a formato universal (solo si se ingresa manualmente una fecha válida)
    const parts = value.split(/[-\/]/);  
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      if (!isNaN(date.getTime())) {  
        internalDate.value = formatToUniversal(date); 
        isInternalChange = true; 
        emit('update:modelValue', internalDate.value);  
      }
    }
  }
};

// Observa cambios en locale para reinicializar flatpickr
watch(() => locale.value, () => {
  initializeFlatpickr();  // Reinicializar flatpickr cuando cambie el locale
});

// Inicializar flatpickr cuando el componente se monte
onMounted(() => {
  initializeFlatpickr();
});
</script>

<template>
  <div class="input--with-icon">
    <!-- Campo visible que muestra el formato amigable -->
    <input
      ref="inputEl"
      v-model="displayDate"
      type="text"
      :placeholder="props.placeholder || 'd-m-Y'"
      @input="handleInput"
    >
    <!-- Campo oculto que almacena la fecha en formato ISO -->
    <input type="hidden" :value="internalDate">
    <FontAwesomeIcon :icon="['fas', 'fa-calendar']" />
  </div>
</template>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>
