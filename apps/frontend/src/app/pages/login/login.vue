<script setup lang="ts">
import { InputPassword } from '@ventura/ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface LoginResponse {
  token: string;
  userId?: number;
  expiresAt?: string;
}

const username = ref('');
const password = ref('');
const acceptTerms = ref(false);
const router = useRouter();

const onSubmit = async (event: Event) => {
  event.preventDefault();
  
  if (!acceptTerms.value) {
    alert('Debes aceptar los términos y condiciones.');
    return;
  }

  try {
    // Aquí es donde harías una llamada real a una API con fetch
    /*
    const response = await fetch('https://api.fakeendpoint.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    const data: LoginResponse = await response.json();

    if (response.ok && data.token) {
      localStorage.setItem('authToken', data.token);

      router.push('/');
    } else {
      alert('Credenciales inválidas o error en la API.');
    }
    */

    // Mock para simular la API de login
    const mockApiLogin = new Promise<LoginResponse>((resolve) => {
      setTimeout(() => {
        const mockToken = 'fake-jwt-token';
        resolve({ token: mockToken, userId: 1, expiresAt: '2024-12-31T23:59:59Z' });
      }, 1000); 
    });

    const response: LoginResponse = await mockApiLogin;

    if (response.token) {
      localStorage.setItem('authToken', response.token);
      router.push('/');
    }

  } catch (error) {
    console.error('Error durante el login:', error);
    alert('Hubo un error durante el login.');
  }
};
</script>

<template>
  <div class="w-9/12">
    <!-- Formulario -->
    <form class="w-full grid gap-6" @submit="onSubmit">
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
          v-model="username"
          :placeholder="$t('login.insertUsername')"
          class="w-full p-3 border border-dark-4 rounded-xxl text-dark focus:outline-none focus:border-main"
        >
      </div>

      <!-- Contraseña -->
      <div class="relative">
        <label for="pass" class="block text-dark font-medium mb-2">
          {{ $t('login.password') }}
        </label>
        <InputPassword v-model="password" name="pass" :placeholder="$t('login.insertPassword')" />
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
          v-model="acceptTerms"
          name="confidentialityTerms"
          class="mt-1"
        />
        <label for="confidentialityTerms" class="text-sm text-dark">
          {{ $t('login.acceptConfidentialityTerms') }}
        </label>
      </div>

      <!-- Botón de enviar -->
      <div class="sm:mt-6 flex items-center flex-col gap-2">
        <button type="submit" class="btn btn--main">
          {{ $t('login.submit') }}
        </button>
      <!-- Olvidó su contraseña -->
        <a href="#" class="text-dark underline text-sm">
          {{ $t('login.forgotPassword') }}
        </a>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
