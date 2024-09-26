<template>
  <div
    :class="[ 
      'bg-white shadow-lg h-full transition-all duration-300 ease-in-out flex flex-col', 
      { 
        'w-16': isCollapsed, 
        'w-64': !isCollapsed, 
        'absolute': isResponsive, 
        'top-0 left-0': isResponsive, 
        'hidden sm:flex': isMobileCollapsed 
      } 
    ]"
  >
    <!-- Contenedor del logo y botón de cerrar -->
    <div class="relative flex justify-center items-center p-4">
      <!-- Logo del menú -->
      <img v-if="!isCollapsed" :src="logoSrc" alt="Logo" class="h-8" />
      <img v-if="isCollapsed" :src="smallLogoSrc" alt="Logo" class="h-8 mr-6" />
      
      <!-- Botón de abrir/cerrar el menú -->
      <button
        class="absolute right-4 bg-transparent text-blue-500 p-0 hover:text-blue-600 focus:outline-none transform transition-transform duration-300"
        @click="toggleMenu"
      >
        <FontAwesomeIcon :icon="isCollapsed ? ['fas', 'chevron-right'] : ['fas', 'times']" />
      </button>
    </div>

    <!-- Lista de enlaces del menú -->
    <ul class="flex-grow flex flex-col space-y-1 mt-4">
      <li
        v-for="(link, index) in links"
        :key="index"
        :class="[ 
          'group flex items-center px-4 py-3 transition-colors duration-200 cursor-pointer relative',
          { 'text-blue-500 font-semibold': link.isSelected, 'hover:bg-gray-100': !link.isSelected }
        ]"
      >
        <span
          v-if="link.isSelected"
          class="absolute left-0 h-full w-1 bg-blue-500 rounded-tr rounded-br"
        ></span>
        <a
          :href="link.href"
          class="flex items-center w-full space-x-4"
        >
          <FontAwesomeIcon :icon="link.icon" class="text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
          <span v-if="!isCollapsed" class="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">{{ link.text }}</span>
        </a>
      </li>
    </ul>

    <!-- Sección inferior del menú -->
    <div class="p-4 flex flex-col items-center">
      <a
        href="#"
        class="flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors duration-200 mb-4"
      >
        <FontAwesomeIcon :icon="['fas', 'sign-out-alt']" class="text-gray-500 mr-2" />
        <span v-if="!isCollapsed">Cerrar Sesión</span>
      </a>
      <img v-if="!isCollapsed" :src="footerLogoSrc" alt="Footer Logo" class="h-6" /> <!-- Logo en el pie del menú -->
    </div>
  </div>

  <!-- Botón flotante para abrir el menú en dispositivos móviles -->
  <button
    v-if="isMobileCollapsed"
    class="fixed top-4 left-4 bg-transparent text-blue-500 p-0 hover:text-blue-600 focus:outline-none sm:hidden z-50"
    @click="toggleMenu"
  >
    <FontAwesomeIcon :icon="['fas', 'bars']" class="text-2xl" />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { FontAwesomeIcon } from '../fontawesome/fontawesome';

export default defineComponent({
  name: 'SideMenu',
  components: {
    FontAwesomeIcon,
  },
  props: {
    links: {
      type: Array as () => Array<{
        text: string;
        icon: [string, string]; // Icono de FontAwesome en formato [prefix, iconName]
        href: string;
        isSelected: boolean;
      }>,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true, // Ruta de la imagen del logo superior
    },
    smallLogoSrc: {
      type: String,
      required: true, // Ruta de la imagen del logo en el menú colapsado
    },
    footerLogoSrc: {
      type: String,
      required: true, // Ruta de la imagen del logo inferior
    },
    initialCollapsed: {
      type: Boolean,
      default: false,
    },
    isResponsive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isCollapsed = ref(props.initialCollapsed);
    const isMobileCollapsed = ref(false);

    // Método para cambiar el estado de colapso del menú
    const toggleMenu = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    // Detectar el tamaño de la ventana para el comportamiento responsive
    const updateMobileView = () => {
      isMobileCollapsed.value = window.innerWidth < 640 && isCollapsed.value;
    };

    // Watch para actualizar el comportamiento cuando el menú colapsa en mobile
    watch(isCollapsed, () => {
      updateMobileView();
    });

    // Listener para cambios en el tamaño de la ventana
    window.addEventListener('resize', updateMobileView);
    updateMobileView(); // Llamar al cargar el componente

    return {
      isCollapsed,
      isMobileCollapsed,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
/* Se eliminan los estilos tradicionales para utilizar exclusivamente Tailwind */
</style>
