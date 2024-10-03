<script setup lang="ts">
import { InputPassword } from '@ventura/ui';
// import { useI18n } from 'vue-i18n';

// const { locale } = useI18n();
// locale.value = 'en';
</script>

<template>
  <div class="w-9/12">
    <!-- Formulario -->
    <form class="w-full grid gap-6">
      <!-- Usuario -->
      <div>
        <label 
          for="user" 
          class="block text-dark font-medium mb-2"
        >
          {{ $t('login.username') }}
        </label>
        <input
          id="user"
          type="text"
          name="user"
          :placeholder="$t('login.insertUsername')"
          class="w-full p-3 border border-dark-4 rounded-xxl text-dark focus:outline-none focus:border-main"
        >
      </div>

      <!-- Contraseña -->
      <div class="relative">
        <label 
          for="pass" 
          class="block text-dark font-medium mb-2"
        >
          {{ $t('login.password') }}
        </label>
        <InputPassword 
          name="pass" 
          :placeholder="$t('login.insertUsername')"
        />
      </div>

      <!-- Nota de seguridad -->
      <p class="text-sm text-dark-3 leading-tight">
        {{ $t('login.confidentialityTerms') }}
      </p>

      <!-- Acepto los términos -->
      <div class="flex items-start space-x-2">
        <input
          id="confidentialityTerms"
          type="checkbox"
          name="confidentialityTerms"
          class="mt-1"
        >
        <label 
          for="confidentialityTerms" 
          class="text-sm text-dark"
        >
          {{ $t('login.acceptConfidentialityTerms') }}
        </label>
      </div>

      <!-- Botón de enviar -->
      <div class="mt-6 flex justify-center">
        <button
          type="submit"
          class="btn btn--main"
          >
          {{ $t('login.submit') }}
        </button>
      </div>

      <!-- Olvidó su contraseña -->
      <div class="text-center mt-4">
        <a 
          href="#" 
          class="text-main hover:underline text-sm"
        >
          {{ $t('login.forgotPassword') }}
        </a>
      </div>
    </form>
    <ActionsDropdown />

    <!-- Footer gestionado por otro componente -->
    <div class="text-center mt-8">
      <!-- Aquí iría el footer si es gestionado por otro componente -->
    </div>
  </div>
</template>

<style scoped></style>
