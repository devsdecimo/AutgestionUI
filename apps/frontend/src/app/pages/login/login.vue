<script setup lang="ts">
import { InputPassword } from '@ventura/ui';
</script>

<template>
  <div class="w-8/12">
    <!-- Formulario -->
    <form class="grid gap-6">
      <!-- Usuario -->
      <div>
        <label for="user" class="block text-dark font-medium mb-2"
          >Nombre de Usuario</label
        >
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Ingresar Nombre de Usuario"
          class="w-full p-3 border border-dark-4 rounded-xxl text-dark focus:outline-none focus:border-main"
        />
      </div>

      <!-- Contraseña -->
      <div class="relative">
        <label for="pass" class="block text-dark font-medium mb-2"
          >Contraseña</label
        >
        <InputPassword name="pass" placeholder="Ingresar Contraseña" />
      </div>

      <!-- Nota de seguridad -->
      <p class="text-sm text-dark-3 leading-tight">
        *Le recordamos que la información de beneficios internos y monetarios es
        confidencial, los datos aquí consultados son personales por tanto no
        debe compartirlos con nadie.
      </p>

      <!-- Acepto los términos -->
      <div class="flex items-start space-x-2">
        <input
          id="confidentialityTerms"
          type="checkbox"
          name="confidentialityTerms"
          class="mt-1"
        />
        <label for="confidentialityTerms" class="text-sm text-dark"
          >Acepto los términos de confidencialidad</label
        >
      </div>

      <!-- Botón de enviar -->
      <div class="mt-6">
        <button
          type="submit"
          class="w-full bg-main hover:bg-info text-white py-3 rounded-xxl text-lg font-semibold transition duration-300"
        >
          Entrar
        </button>
      </div>

      <!-- Olvidó su contraseña -->
      <div class="text-center mt-4">
        <a href="#" class="text-main hover:underline text-sm"
          >Olvidé mi contraseña</a
        >
      </div>
    </form>

    <!-- Footer gestionado por otro componente -->
    <div class="text-center mt-8">
      <!-- Aquí iría el footer si es gestionado por otro componente -->
    </div>
  </div>
</template>

<style scoped></style>
