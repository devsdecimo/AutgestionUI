<template>
  <div class="dropdown-container relative">
    <div
      class="dropdown-button flex items-center p-4 bg-white rounded-full shadow-md cursor-pointer justify-between"
      @click="toggleDropdown"
    >
      <div class="flex items-center">
        <!-- Icono dependiendo del tipo -->
        <span v-if="iconType === 'html'" v-html="icon" class="icon-container"></span>
        <img v-else-if="iconType === 'image'" :src="icon" alt="Icon" class="icon-container" />
        <i v-else-if="iconType === 'fontawesome'" :class="icon" class="icon-container"></i>

        <!-- Muestra el label de la opción seleccionada o el placeholder -->
        <span class="ml-2 text-blue-600 font-semibold">
          {{ selectedLabel || placeholder }}
        </span>
      </div>

      <!-- Flecha desplegable -->
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>

    <!-- Lista de opciones -->
    <div v-if="isOpen" class="dropdown-menu absolute mt-2 w-full bg-white shadow-md rounded-lg z-10">
      <ul class="py-2">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="px-4 py-2 cursor-pointer hover:bg-gray-100"
          :class="{'bg-gray-200 font-bold': option.value === modelValue}">
          <!-- Aplicar clases cuando la opción está seleccionada -->
          {{ option.label }} <!-- Muestra solo el label -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';

export default defineComponent({
  name: 'Dropdown',
  props: {
    options: {
      type: Array as () => { label: string; value: string | number }[],
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Selecciona una opción', // Placeholder por defecto
    },
    defaultValue: {
      type: [String, Number],
      default: null, // Valor predeterminado
    },
    icon: {
      type: String,
      required: true, 
    },
    iconType: {
      type: String,
      default: 'html', 
      validator: (value: string) => ['html', 'image', 'fontawesome'].includes(value),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOpen = ref(false);
    const selectedLabel = ref(''); // Almacenaremos el label de la opción seleccionada

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    // Manejar la selección de una opción
    const selectOption = (option: { label: string; value: string | number }) => {
      selectedLabel.value = option.label;
      isOpen.value = false;
      emit('update:modelValue', option.value); // Emitimos el value de la opción seleccionada
    };

    // Actualizar el label cuando cambia el modelValue
    watch(
      () => props.modelValue,
      (newValue) => {
        const selected = props.options.find((option) => option.value === newValue);
        if (selected) {
          selectedLabel.value = selected.label; // Asignamos el label correspondiente al value
        } else {
          selectedLabel.value = ''; // Si no hay una opción seleccionada, mostrar placeholder
        }
      },
      { immediate: true }
    );

    // Si se proporciona un defaultValue, establecerlo como seleccionado al montar el componente
    onMounted(() => {
      if (props.defaultValue !== null) {
        const defaultOption = props.options.find((option) => option.value === props.defaultValue);
        if (defaultOption) {
          selectOption(defaultOption);
        }
      }
    });

    return {
      isOpen,
      selectedLabel,
      toggleDropdown,
      selectOption,
    };
  },
});
</script>

<style scoped>
.dropdown-button {
  min-width: 250px;
}

.dropdown-menu {
  width: 100%;
  border-radius: 10px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.icon {
  color: #6b7280;
}
</style>
