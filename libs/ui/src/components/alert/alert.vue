<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import type { AlertProps } from '../../types/alert';

const props = withDefaults(defineProps<AlertProps>(), {
  title: 'Toast title',
  content: 'Toast message here',
  type: 'success',
  isOutline: false,
});

const alertTypeConfig = {
  success: {
    cssClass : props.isOutline? 'alert--success alert--outline':'alert--success' ,
    icon: ['fas', 'circle-check']
  },
  error: {
    cssClass : props.isOutline? 'alert--error alert--outline':'alert--error' ,
    icon: ['fas', 'ban']
  },
  warning: {
    cssClass : props.isOutline? 'alert--warning alert--outline':'alert--warning' ,
    icon: ['fas', 'circle-exclamation']
  },
  info: {
    cssClass : props.isOutline? 'alert--info alert--outline':'alert--info' ,
    icon: ['fas', 'circle-info']
  },
}

// Función para modificar el valor en el padre que lo oculta
const hide = () => {
  if(props.setShowMessage)
  props.setShowMessage(false);
};

</script>

<template>
  <div :class="alertTypeConfig[type].cssClass">
    <div class="alert__container">
      <FontAwesomeIcon :icon="alertTypeConfig[type].icon" class="icon" ></FontAwesomeIcon>
      <div>
        <h4>{{ title }}</h4>
        <p>{{content}}</p>
      </div>
    </div>
    <FontAwesomeIcon @click="hide" :icon="['fas', 'xmark']" class="alert__close"></FontAwesomeIcon>
  </div>
</template>

<style scoped>

</style>
