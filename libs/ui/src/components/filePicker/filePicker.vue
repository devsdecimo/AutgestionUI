<template>
  <div>
    <!-- Input personalizado para arrastrar o hacer clic -->
    <div
      v-if="uploadedFiles === 0"
      class="border border-dark-4 rounded-[4px] p-3 text-center relative cursor-pointer hover:bg-gray-100"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
      :class="isDragging ? 'bg-gray-200' : ''"
    >
      <p class="text-dark-2">Arrastre o Presione esta caja para subir un archivo.</p>
      <input
        ref="fileInput"
        type="file"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        @change="handleFileChange"
      />
    </div>
    <!-- Datos de archivo seleccionado -->
    <div v-else class="border border-dark-4 p-3 flex justify-between items-center rounded-[4px]">
      <div class="flex items-center gap-2">
        <FontAwesomeIcon :icon="['fas', 'file-export']" class="w-8 h-8 text-info" ></FontAwesomeIcon>
        <h2>{{file.name}}</h2>
      </div>
      <FontAwesomeIcon :icon="currentIcon" @mouseover="deleteBtnOnHovered = true"
                       @mouseleave="deleteBtnOnHovered = false" class="cursor-pointer justify-self-end h-6 w-6 text-success hover:text-error" @click="deleteFile"></FontAwesomeIcon>

    </div>

    <!-- Modal de progreso y confirmación -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-[25px] shadow-lg w-3/5">
        <h2 class="text-lg font-bold mb-2 text-center text-dark">Subir Archivo</h2>
        <div class="flex items-center gap-3 border-y border-dark-4 p-3">
          <!-- Vista previa del archivo -->
          <div v-if="file" class="flex items-center gap-2">
            <FontAwesomeIcon :icon="['fas', 'file-export']" class="w-8 h-8 text-info" ></FontAwesomeIcon>
            <p class="text-gray-700">Archivo: {{ file.name }}</p>
          </div>

          <!-- Barra de progreso -->
          <div class="w-full bg-dark-4 rounded-full h-6 relative">
            <div
              class="bg-info h-6 rounded-full"
              :style="{ width: `${progress}%` }"
            >
            </div>
            <span class="absolute w-full h-full text-center text-white top-0 left-0">{{progress + " %"}}</span>
          </div>

        </div>
        <div class="flex justify-between pt-4">
          <p class="text-gray-600">{{ uploadedFiles }} de 1 archivo subido</p>
          <!-- Botones -->
          <div class="flex justify-between gap-3 items-end">
            <button
              @click="cancelUpload"
              class="btn--info btn--outline"
            >
              Cancelar
            </button>
            <button
              @click="confirmUpload"
              class="btn--info"
            >
              Subir
            </button>
          </div>
        </div>

      </div>
    </div>
    <!-- Modal de confirmación -->
    <div v-if="showConfirmationMessage" class="alert--success">
      <div class="alert__container">
        <FontAwesomeIcon :icon="['far', 'circle-check']" class="icon" ></FontAwesomeIcon>
        <div>
          <h4>Archivo Subido</h4>
          <p>Archivo Correctamente Subido</p>
        </div>
      </div>
      <FontAwesomeIcon @click="showConfirmationMessage=false" :icon="['fas', 'xmark']" class="alert__close"></FontAwesomeIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Definir los tipos de las referencias
const fileInput = ref<HTMLInputElement | null>(null);
const showModal = ref<boolean>(false);
const showConfirmationMessage = ref<boolean>(false);
const isDragging = ref<boolean>(false);
const file = ref<File | null>(null);
const progress = ref<number>(0);
const uploadedFiles = ref<number>(0);
const deleteBtnOnHovered = ref<boolean>(false);

// Computed properties
const currentIcon = computed(() => deleteBtnOnHovered.value ? ['far', 'circle-xmark'] : ['far', 'circle-check']);

let isFirstClick = true;

// Abrir el modal y manejar la subida
const triggerFileInput = () => {
  console.log('click');
  if (isFirstClick) {
    isFirstClick = false;
  } else {
    fileInput.value?.click();
  }
};

// Manejar el archivo seleccionado
const handleFileChange = (event: Event) => {
  console.log('se disparo evento handle file change');
  const target = event.target as HTMLInputElement;
  file.value = target.files?.[0] || null; // Manejar archivos
  console.log(file.value)
  if (file.value) {
    showModal.value = true;
  }
};

// Manejar el arrastrar y soltar
const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    file.value = files[0];
    showModal.value = true;
  }
};

// Simular progreso de subida
const confirmUpload = () => {
  const interval = setInterval(() => {
    progress.value += 10;
    if (progress.value >= 100) {
      clearInterval(interval);
      uploadedFiles.value = 1;
      showModal.value = false;
      showConfirmationMessage.value = true;
      setTimeout(() => {
        showConfirmationMessage.value = false;
      }, 3000);
    }
  }, 200);
};

// Cancelar la subida
const cancelUpload = () => {
  progress.value = 0;
  file.value = null;
  uploadedFiles.value = 0;
  isFirstClick = true;
  showModal.value = false;

};

// Quitar el archivo
const deleteFile = () => {
  file.value = null;
  uploadedFiles.value = 0;
  progress.value = 0;
  isFirstClick = true;
};

</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
