<template>
  <div :class="[isDropdown ? 'accordion' : '']" class="">
    <div
      class="card rounded-[20px] md:rounded-[25px] border border-light_gray overflow-hidden relative accordion-section"
    >
      <div
        v-if="withHeader"
        class="bg-main text-white p-3 accordion-header cursor-pointer md:pointer-events-none"
        @click="isDropdown ? toggleSection() : ''"
      >
        <!-- Header -->
        <slot :name="'header'"></slot>
      </div>
      <div
        v-if="withRightIcon"
        class="absolute top-4 right-4 bg-main rounded-[20px] p-4 text-center"
      >
        <!-- Icono derecha -->
        <slot :name="'right-icon'"></slot>
      </div>
      <div v-if="isOpen || !isDropdown" class="accordion-content text-base_gray">
        <!-- Content -->
        <div class="p-3">
          <slot :name="'principal-content'"></slot>
        </div>
        <div v-if="withFooter" class="border-t border-light_gray p-3" >
          <!-- Footer -->
          <slot :name="'footer'"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onMounted, onUnmounted } from 'vue';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<{
  withHeader?: boolean;
  withFooter?: boolean;
  withRightIcon?: boolean;
  isDropdown?: boolean;
}>(), {
  withHeader: false,
  withFooter: false,
  withRightIcon: false,
  isDropdown: false,
});

// Variables y lógica
const isOpen = ref(window.innerWidth > 768);

const toggleSection = () => {
  if(props.isDropdown){
    isOpen.value = !isOpen.value;
  }
};

const handleResize = () => {
  isOpen.value = window.innerWidth>768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<style scoped>
/* Puedes añadir otros estilos aquí si es necesario */
.card{
  box-shadow: 0px 4px 4px -4px rgba(12, 12, 13, 0.05);
  box-shadow: 0px 16px 32px -4px rgba(12, 12, 13, 0.1);
}

</style>
