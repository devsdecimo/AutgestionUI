<template>
  <div 
    class="grid" 
    :style="gridStyles">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watchEffect, onMounted, onUnmounted } from "vue";

// Definir las propiedades del componente
const props = defineProps({
  columns: {
    type: Number,
    default: 12,
    validator: (value: number) => value > 0 && value <= 12,
  },
  columnsMd: {
    type: Number,
    default: 8, // Valor por defecto para dispositivos medianos
    validator: (value: number) => value > 0 && value <= 12,
  },
  columnsSm: {
    type: Number,
    default: 4, // Valor por defecto para dispositivos pequeños
    validator: (value: number) => value > 0 && value <= 12,
  },
  gap: {
    type: String,
    default: "0",
  },
  breakpointMd: {
    type: String,
    default: "768px", 
  },
  breakpointSm: {
    type: String,
    default: "480px",
  }
});

// Variable reactiva para almacenar el número de columnas actual
const currentColumns = ref(props.columns);

// Función para actualizar el número de columnas según el ancho del dispositivo
const updateColumns = () => {
  
  if (window.matchMedia(`(max-width: ${props.breakpointSm})`).matches) {
    currentColumns.value = props.columnsSm;
  } else if (window.matchMedia(`(max-width: ${props.breakpointMd})`).matches) {
    currentColumns.value = props.columnsMd;
  } else {
    currentColumns.value = props.columns;
  }
};

onMounted(() => {
  updateColumns(); // Inicializar con el tamaño adecuado

  window.addEventListener("resize", updateColumns);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateColumns);
});

// Proporcionar el valor de columnas a los componentes hijos
provide("columns", {columns: props.columns, columns_md:  props.columnsMd, columns_sm: props.columnsSm});
provide("breakpoints", {breakpointMd: props.breakpointMd, breakpointSm:  props.columnsMd, columns_sm: props.columnsSm});
provide("gap", props.gap);

// Actualizar el estilo de la cuadrícula
const gridStyles = ref({
  display: "grid",
  "grid-template-columns": `repeat(${currentColumns.value}, 1fr)`,
  gap: `${props.gap}`,
});

// Efecto de watch para actualizar el estilo cuando cambian las columnas
watchEffect(() => {
  gridStyles.value["grid-template-columns"] = `repeat(${currentColumns.value}, 1fr)`;
});

</script>

<style scoped>
.grid {
  width: 100%;
}
</style>
