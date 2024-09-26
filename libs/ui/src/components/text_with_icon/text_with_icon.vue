<template>
  <component
    :is="componentType"
    :href="href"
    class="flex items-center text-with-icon"
    :class="{ 'text-with-icon-link': isLink }"
    :style="{ color: isSelected ? selectedColor : linkColor }"
  >
    <!-- Icono a la izquierda -->
    <span
      v-if="iconType === 'html' && iconPosition === 'left'"
      class="icon-container"
      v-html="icon"
    />
    <img
      v-if="iconType === 'image' && iconPosition === 'left'"
      :src="icon"
      alt="Icon"
      class="icon-container"
    >
    <i
      v-if="iconType === 'fontawesome' && iconPosition === 'left'"
      :class="icon"
      class="icon-container"
    />

    <!-- Texto -->
    <span class="text">{{ text }}</span>

    <!-- Icono a la derecha -->
    <span
      v-if="iconType === 'html' && iconPosition === 'right'"
      v-html="icon"
      class="icon-container"
    ></span>
    <img
      v-if="iconType === 'image' && iconPosition === 'right'"
      :src="icon"
      alt="Icon"
      class="icon-container"
    />
    <i
      v-if="iconType === 'fontawesome' && iconPosition === 'right'"
      :class="icon"
      class="icon-container"
    ></i>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextWithIcon',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      default: 'html', // Tipos: 'html', 'image', 'fontawesome'
      validator: (value: string) =>
        ['html', 'image', 'fontawesome'].includes(value),
    },
    href: {
      type: String,
      default: null, // Si se proporciona un href, el componente se convierte en un enlace
    },
    isSelected: {
      type: Boolean,
      default: false, // Indica si el enlace está seleccionado
    },
    linkColor: {
      type: String,
      default: '#6b7280', // Color por defecto del enlace, gris
    },
    selectedColor: {
      type: String,
      default: '#66aaff', // Color del enlace cuando está seleccionado
    },
    iconPosition: {
      type: String,
      default: 'left', // Posición del icono: 'left' o 'right'
      validator: (value: string) => ['left', 'right'].includes(value),
    },
  },
  computed: {
    isLink() {
      return !!this.href;
    },
    componentType() {
      return this.href ? 'a' : 'div'; // Si hay href, es un enlace, de lo contrario, un div
    },
  },
});
</script>

<style scoped>
.text-with-icon {
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: default;
}

.text-with-icon-link {
  text-decoration: none;
  cursor: pointer;
}

.icon-container {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
