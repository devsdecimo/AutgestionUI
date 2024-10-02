<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import type { AlertProps } from '../../types/alert';
import { computed } from 'vue';

const props = withDefaults(defineProps<AlertProps>(), {
  title: 'Toast title',
  content: 'Toast message here',
  type: 'success',
  isOutline: false
});
const alertClass = computed(() => props.isOutline?'alert--'+props.type+' alert--outline':'alert--'+props.type);
console.log(alertClass.value)
const icon = computed(() => {
  switch(props.type){
    case 'success':
      return ['fas', 'circle-check'];
    case 'error':
      return ['fas', 'ban'];
    case 'warning':
      return ['fas', 'circle-exclamation'];
    default:
      return ['fas', 'circle-info'];

  }
})

</script>

<template>
  <div :class="'alert '+alertClass">
    <div class="alert__container">
      <FontAwesomeIcon :icon="icon" class="icon" ></FontAwesomeIcon>
      <div>
        <h4>{{ title }}</h4>
        <p>{{content}}</p>
      </div>
    </div>
    <FontAwesomeIcon :icon="['fas', 'xmark']" class="alert__close"></FontAwesomeIcon>
  </div>
</template>

<style scoped>

</style>
