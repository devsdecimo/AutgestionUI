<template>
  <div :class="gridItemClass" :style="itemStyles">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, inject, ref, onMounted, onUnmounted } from 'vue';

interface Columns {
  columns: number;
  columns_md: number;
  columns_sm: number;
}

interface Breakpoints {
  breakpoint_md: string;
  breakpoint_sm: string;
}

// Inyectar las columnas y los breakpoints desde el componente padre.
const columnsParent = inject<Columns>('columns', {
  columns: 12,
  columns_md: 7,
  columns_sm: 4,
});
const breakpointsParent = inject<Breakpoints>('breakpoints', {
  breakpoint_md: '1024px',
  breakpoint_sm: '768px',
});
const gap = inject<string>('gap', '0px');

// Desestructurar las propiedades inyectadas con valores predeterminados.
const columns = columnsParent?.columns ?? 12;
const columnsMd = columnsParent?.columns_md ?? 7;
const columnsSm = columnsParent?.columns_sm ?? 4;
const breakpointMd = breakpointsParent?.breakpoint_md ?? '1024px';
const breakpointSm = breakpointsParent?.breakpoint_sm ?? '768px';

// Definir props del componente.
const props = defineProps({
  colSpan: {
    type: [Number, String],
    default: 1,
    validator: (value: number) => Number(value) > 0 && Number(value) <= 12,
  },
  colSpanMd: {
    type: [Number, String],
    default: 2, // Valor por defecto para dispositivos medianos
    validator: (value: number) => Number(value) > 0 && Number(value) <= 12,
  },
  colSpanSm: {
    type: [Number, String],
    default: 4, // Valor por defecto para dispositivos pequeños
    validator: (value: number) => Number(value) > 0 && Number(value) <= 12,
  },
  offsetLeft: {
    type: [Number, String],
    default: 0,
    validator: (value: number) => Number(value) >= 0 && Number(value) <= 11,
  },
  order: {
    type: [Number, String],
    default: 0,
  },
});

// Estado reactivo para el ancho de la ventana.
const windowWidth = ref(window.innerWidth);

// Función para actualizar el ancho de la ventana.
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

// Computed para las clases del grid item.
const gridItemClass = computed(() => ({
  'grid-item': true,
}));

// Función para obtener los valores de gap y su unidad.
const getGapValues = (value: string) => {
  const match = value.match(/^(\d+(\.\d+)?)([a-zA-Z%]+)$/);

  if (match) {
    return {
      value: parseFloat(match[1]), // Valor numérico del gap.
      unit: match[3], // Unidad del gap (px, rem, etc).
    };
  }
  return null;
};

// Computed para los estilos del grid item adaptados a los breakpoints.
const itemStyles = computed(() => {
  let currentColumns = columns;
  let colSpan = Number(props.colSpan);

  // Ajustar el número de columnas y colSpan según el ancho de la ventana.
  if (windowWidth.value <= parseInt(breakpointSm)) {
    currentColumns = columnsSm;
    colSpan = Number(props.colSpanSm) > currentColumns ? currentColumns : Number(props.colSpanSm);
  } else if (windowWidth.value <= parseInt(breakpointMd)) {
    currentColumns = columnsMd;
    colSpan = Number(props.colSpanMd) > currentColumns ? currentColumns : Number(props.colSpanMd);
  }

  const offsetLeft = Number(props.offsetLeft);

  if (offsetLeft + colSpan > currentColumns) {
    return {
      gridColumn: `span ${colSpan}`,
      order: Number(props.order).toString(),
      marginLeft: `0%`,
    };
  }

  const gapValues = getGapValues(gap);

  const totalSpan = colSpan + offsetLeft;

  let gapOnOffset = '0';
  let gapValue = 0;
  let gapUnit = 'px';
  if (gapValues != null) {
    gapValue = gapValues?.value;
    gapUnit = gapValues?.unit;
  }
  gapOnOffset = offsetLeft > 0 ? `${gapValue / Math.abs(totalSpan - offsetLeft)}${gapUnit}` : '0';

  const marginLeft =
    windowWidth.value > parseInt(breakpointSm)
      ? `calc(${(offsetLeft * 100) / totalSpan}% + ${gapOnOffset})`
      : '0%';

  return {
    gridColumn: `span ${totalSpan}`,
    marginLeft,
    order: Number(props.order).toString(),
  };
});
</script>

<style scoped>
.grid-item {
  min-width: 0;
  box-sizing: border-box;
}
</style>
