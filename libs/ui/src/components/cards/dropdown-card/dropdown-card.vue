<template>
  <div class="accordion dropdown-card">
    <div
      class="card--shadow accordion-section overflow-hidden"
    >
      <div
        class="dropdown-card__header accordion-header"
        @click="toggleSection()"
      >
        <FontAwesomeIcon :icon="icon" class="dropdown-card__icon"></FontAwesomeIcon>
        <h3>{{title}}</h3>
      </div>

      <div v-if="isOpen" class="dropdown-card__content accordion-content">
        <!-- Content -->
        <div v-for="(section, index) in sections" :key="index" class="dropdown-card__section">
          <h4>{{ section.title }}</h4>
          <span>{{ section.content }}</span>
        </div>
        <a :href="link" class="btn--info inline-block mt-4 font-semibold">{{buttonText}}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Types
import type { DropdownCardProps } from '../../../types/cards/dropdown-card';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = withDefaults(defineProps<DropdownCardProps>(), {
  title: 'Persona',
  icon: ['fas', 'user'],
  sections: [
    { title: 'Puesto', content: 'Charlene Reed ' },
    { title: 'Salario Base', content: '897,580.74' },
    { title: 'Horario', content: 'Tiempo Completo' },
  ],
  link: '/persona',
  buttonText: 'Ver Detalles'
});

// Variables y lógica
const isOpen = ref(window.innerWidth > 768);

const toggleSection = () => {
  if(window.innerWidth < 768)
    isOpen.value = !isOpen.value;
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

<style scoped lang="postcss">
.dropdown-card{
  @apply text-sm;
  &__header{
    @apply bg-main text-white p-5 cursor-pointer md:pointer-events-none flex flex-col items-center gap-2;
    h3{
      @apply font-semibold;
    }
  }
  &__icon{
    @apply h-8 w-8 text-white;
  }
  &__content{
    @apply text-dark-3 p-4 py-12 text-center;
  }
  &__section{
    @apply text-dark;
    span{
      @apply border rounded-xxl border-dark-4 p-2 m-2 inline-block py-4 px-6;
    }
  }
}

</style>
