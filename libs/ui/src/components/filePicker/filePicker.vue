<template>
  <div>
    <!-- Input personalizado para arrastrar o hacer clic -->
    <div
      v-if="uploadedFiles === 0"
      class="border border-gray-300 rounded-[4px] p-3 text-center relative cursor-pointer hover:bg-gray-100"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
      :class="isDragging ? 'bg-gray-200' : ''"
    >
      <p class="text-gray-500">Arrastre o Presione esta caja para subir un archivo.</p>
      <input
        ref="fileInput"
        type="file"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        @change="handleFileChange"
      />
    </div>
    <!-- Datos de archivo seleccionado -->
    <div v-else class="border border-light_gray p-3 flex justify-between items-center rounded-[4px]">
      <div class="flex items-center gap-2">
        <img v-if="isImage" :src="preview" alt="Vista previa" class="w-8 h-8 object-cover" />
        <img v-else-if="file.type === 'application/pdf'" :src="pdfImage" alt="pdf">
        <h2>{{file.name}}</h2>
      </div>
      <img :src="currentIcon" alt="success" @mouseover="deleteBtnOnHovered = true"
           @mouseleave="deleteBtnOnHovered = false" class="cursor-pointer justify-self-end" @click="deleteFile">
    </div>

    <!-- Modal de progreso y confirmación -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-3/5">
        <h2 class="text-lg font-bold mb-2 text-center text-base_gray">Subir Archivo</h2>
        <div class="flex items-center gap-3 border-y border-light_gray p-3">
          <!-- Vista previa del archivo -->
          <div v-if="preview" class="flex items-center gap-2">
            <img v-if="isImage" :src="preview" alt="Vista previa" class="w-8 h-8 object-cover" />
            <img v-if="file.type === 'application/pdf'" :src="pdfImage" alt="pdf">
            <p class="text-gray-700">Archivo: {{ file.name }}</p>
          </div>

          <!-- Barra de progreso -->
          <div class="w-full bg-gray-200 rounded-full h-6 relative">
            <div
              class="bg-blue-500 h-6 rounded-full"
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
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancelar
            </button>
            <button
              @click="confirmUpload"
              class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Subir
            </button>
          </div>
        </div>

      </div>
    </div>
    <!-- Modal de confirmación -->
    <div v-if="showConfirmationMessage" class="fixed bottom-0 right-0 bg-success p-6">
      <h2 class="text-white">Archivo subido exitosamente</h2>
      <a @click="showConfirmationMessage=false" class="text-white absolute top-2 right-2 cursor-pointer">x</a>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import successImage from './assets/success.svg';
import deleteImage from './assets/delete.svg';
import pdfImage from './assets/pdf-icon.svg';

export default {
  setup() {
    const fileInput = ref(null);
    const showModal = ref(false);
    const showConfirmationMessage = ref(false);
    const isDragging = ref(false);
    const file = ref(null);
    const preview = ref('');
    const progress = ref(0);
    const uploadedFiles = ref(0);
    const isImage = computed(() => file.value && file.value.type.startsWith('image'));
    const deleteBtnOnHovered = ref(false)
    const currentIcon = computed(()=> deleteBtnOnHovered.value ? deleteImage : successImage)

    let isFirstClick = true;
    // Abrir el modal y manejar la subida
    const triggerFileInput = () => {
      console.log('click')
      if(isFirstClick){
        isFirstClick = false;
      }else{
        fileInput.value.click();
      }
    };

    // Manejar el archivo seleccionado
    const handleFileChange = (event) => {
      console.log('se disparo evento handle file change')
      file.value = event.target.files[0];
      if (file.value) {
        previewFile(file.value);
        showModal.value = true;
      }
    };

    // Manejar el arrastrar y soltar
    const handleDrop = (event) => {
      file.value = event.dataTransfer.files[0];
      if (file.value) {
        previewFile(file.value);
        showModal.value = true;
      }
    };

    const previewFile = (file) => {
      if (file /*&& file.type.startsWith('image')*/) {
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.value = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        preview.value = null;
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
          // Vuelve a poner en false después de 3 segundos
          setTimeout(() => {
            showConfirmationMessage.value = false;
          }, 3000);
        }
      }, 200);
    };

    // Cancelar la subida
    const cancelUpload = () => {
      showModal.value = false;
      progress.value = 0;
      file.value = null;
      preview.value = '';
      uploadedFiles.value = 1;
      uploadedFiles.value = 0;
      isFirstClick = true;
    };

    // Quitar el archivo
    const deleteFile = () => {
      file.value = null;
      preview.value = '';
      uploadedFiles.value = 0;
      progress.value = 0;
      isFirstClick = true;
    }

    return {
      fileInput,
      showModal,
      showConfirmationMessage,
      isDragging,
      file,
      preview,
      progress,
      uploadedFiles,
      isImage,
      triggerFileInput,
      handleFileChange,
      handleDrop,
      confirmUpload,
      cancelUpload,
      successImage,
      pdfImage,
      deleteBtnOnHovered,
      currentIcon,
      deleteFile
    };
  },
};
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
