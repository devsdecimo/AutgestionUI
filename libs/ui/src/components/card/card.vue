<template>
  <div :class="[skin == 'withHeader' ? 'accordion' : '']">
    <div
      :class="cardClass"
      class="card rounded-lg border border-grey overflow-hidden relative shadow-lg accordion-section"
    >
      <!-- Cabecera de la Card -->
      <div
        v-if="skin == 'withHeader'"
        class="bg-blue-500 p-3 accordion-header cursor-pointer md:pointer-events-none"
        @click="skin == 'withHeader' ? toggleSection() : ''"
      >
        <span v-if="iconType === 'html'" v-html="icon" class="icon"></span>
        <img
          v-else-if="iconType === 'image'"
          :src="icon"
          alt="Icon"
          class="icon m-auto"
        />
        <FontAwesomeIcon
          v-else-if="iconType === 'fontawesome'"
          class="icon text-white"
          :icon="icon"
        />

        <h3 class="text-white">{{ title }}</h3>
      </div>
      <!-- Icono derecha -->
      <div
        v-if="skin == 'withRightIcon'"
        class="absolute top-4 right-4 bg-blue-500 rounded-lg p-4 text-center"
      >
        <span v-if="iconType === 'html'" v-html="icon" class="icon"></span>
        <img
          v-else-if="iconType === 'image'"
          :src="icon"
          alt="Icon"
          class="icon m-auto"
        />
        <FontAwesomeIcon
          v-else-if="iconType === 'fontawesome'"
          class="icon text-white"
          :icon="icon"
        />
      </div>
      <div v-if="isOpen || skin != 'withHeader' || !isDropdown" class="accordion-content mt-3">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="mb-2 px-3"
        >
          <!-- Título de la sección -->
          <h3>{{ section.title }}</h3>
          <!-- Contenido -->
          <div :class="cardContentClass" class="=p-4 mb-4">
            <slot :name="'content-' + index">{{ section.content }}</slot>
          </div>
        </div>
        <slot :name="'button'"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { computed, ref, defineProps } from 'vue';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<{
  skin?: string;
  title?: string;
  icon?: any;
  iconType?: string;
  isDropdown?: boolean;
  sections: { title: string; content: string }[];
}>(), {
  skin: 'primary',
  title: 'Titulo',
  icon: fas.faHouse,
  iconType: 'fontawesome',
  isDropdown: true,
  sections: [
    { title: 'Sección 1', content: 'Contenido de la sección 1.' },
    { title: 'Sección 2', content: 'Contenido de la sección 2.' },
    { title: 'Sección 3', content: 'Contenido de la sección 3.' }
  ]
});

// Variables y lógica
const isOpen = ref(window.innerWidth > 768);

// Computar la clase del botón según el skin
const cardClass = computed(() => {
  switch (props.skin) {
    case 'primary':
      return 'bg-white text-blue-500 p-4';
    case 'withHeader':
      return 'bg-white text-gray-700 text-center';
    case 'withRightIcon':
      return 'bg-white text-gray-700 p-4';
    case 'inactive':
      return 'bg-gray-400 text-gray-600 cursor-not-allowed p-4';
    default:
      return 'bg-white text-black';
  }
});

const cardContentClass = computed(() => {
  switch (props.skin) {
    case 'primary':
      return 'font-semibold';
    case 'withRightIcon':
      return 'font-semibold';
    case 'withHeader':
      return 'border rounded-lg p-2';
    default:
      return '';
  }
});

const toggleSection = () => {
  if(props.isDropdown){
    isOpen.value = !isOpen.value;
  }

};

</script>

<style scoped>
/* Puedes añadir otros estilos aquí si es necesario */


</style>
