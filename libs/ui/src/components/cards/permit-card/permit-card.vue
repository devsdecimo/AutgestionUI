<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { PermitCardProps } from '../../../types/cards/permit-card';

// Definir las props y sus valores por defecto con withDefaults
const props = withDefaults(defineProps<PermitCardProps>(), {
  name: 'Jorge Trejos Castro',
  applicationNumber: 3728,
  id: 111111263,
  actionType: 'Solicitado',
  registrationDate: '29/07/2024',
  startDate: '29/07/2024',
  endDate: '2/08/2024',
  reason: 'Lorem Ipsum',
  state: 'Pendiente',
  doc: 'Doc Lorem Ipsum',
  time: '00:00'
});

</script>

<template>
  <div class="permit-card">
    <div class="card__content">
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div class="col-span-1 md:col-span-10">
          <h4>Nombre Completo</h4>
          <span>{{name}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>No. Solicitud</h4>
          <span>{{applicationNumber}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>Identificación</h4>
          <span>{{id}}</span>
        </div>
        <div class="col-span-1 md:col-span-4">
          <h4>Tipo de Acción</h4>
          <span>{{actionType}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>Registro</h4>
          <span>{{registrationDate}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>Inicio</h4>
          <span>{{startDate}}</span>
        </div>
        <div class="col-span-1 md:col-span-4">
          <h4>Final</h4>
          <span>{{endDate}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>Justificación</h4>
          <span>{{reason}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>Estado</h4>
          <span>{{state}}</span>
        </div>
        <div class="col-span-1 md:col-span-4">
          <h4>Documento de Soportee</h4>
          <span>{{doc}}</span>
        </div>
        <div class="col-span-1 md:col-span-3">
          <h4>Tiempo</h4>
          <span>{{time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.permit-card{
  @apply card--shadow;
  h4{
    @apply font-thin text-sm;
  }
  span{
    @apply font-semibold text-sm;
  }
}
</style>
