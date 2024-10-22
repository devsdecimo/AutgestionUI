<script setup lang="ts">
//Data
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const data = {
  name: 'Charlene Reed ',
  user: 'Charlene Reed ',
  email: 'charlenereed@gmail.com ',
  password: 'pass1234',
  birthday: '1990-01-25',
  province: 'San José',
  canton: 'Avenida Lorem, Calle Ipsum',
  district: 'Distrito Lorem Ipsum',
  postalCode: '10120',
  country: 'Costa Rica',
  profileURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}


</script>

<template>
  <div class="main-container">
    <div class="main-container__card">
      <div class="main-container__header">
        <h2>{{ $t('profile.title') }}</h2>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-10 gap-8 py-10 md:p-10">
        <div class="xl:col-span-2">
          <div class="relative">
            <img :src="data.profileURL" alt="profile" class="rounded-full w-full object-cover aspect-square">
            <button class="profile-edit-btn">
            <FontAwesomeIcon :icon="['fas', 'pencil']" class="profile-edit-btn__icon"></FontAwesomeIcon>
            </button>
          </div>

        </div>
        <div class="xl:col-span-8">
          <div class="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label>{{ $t('profile.name') }}</label>
              <input type="text" :value="data.name"/>
            </div>
            <div class="w-full">
              <label>{{ $t('profile.user') }}</label>
              <input type="text" :value="data.user"/>
            </div>
            <div>
              <label>{{ $t('profile.email') }}</label>
              <input type="email" :value="data.email"/>
            </div>
            <div>
              <label>{{ $t('profile.password') }}</label>
              <input type="password" :value="data.password"/>
            </div>
            <div class="lg:col-span-2 flex flex-col lg:flex-row gap-6 justify-end pb-4 lg:pb-0">
              <button class="btn--main font-semibold">{{ $t('profile.edit') }}</button>
              <button class="btn--main font-semibold">{{ $t('profile.save') }}</button>
            </div>
            <div>
              <label>{{ $t('profile.birthday') }}</label>
              <input type="date" :value="data.birthday"/>
            </div>
            <div>
              <label>{{ $t('profile.province') }}</label>
              <input type="text" :value="data.province"/>
            </div>
            <div>
              <label>{{ $t('profile.canton') }}</label>
              <input type="text" :value="data.canton"/>
            </div>
            <div>
              <label>{{ $t('profile.district') }}</label>
              <input type="text" :value="data.district"/>
            </div>
            <div>
              <label>{{ $t('profile.postalCode') }}</label>
              <input type="text" :value="data.postalCode"/>
            </div>
            <div>
              <label>{{ $t('profile.country') }}</label>
              <input type="text" :value="data.country"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="postcss">
  .profile-edit-btn{
    @apply absolute rounded-full bg-main text-white p-0 flex items-center justify-center;
    right:5%;
    bottom:5%;
    width:20%;
    height:20%;
    &__icon svg{
      width:40%;
      height:auto;
    }

  }

</style>
