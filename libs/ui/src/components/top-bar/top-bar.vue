<script setup lang="ts">
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
import { ActionsDropdown, Dropdown } from '@ventura/ui';
import { onClickOutside } from '@vueuse/core';

defineProps({
  isMobileMenuVisible: Boolean
});

const emit = defineEmits(['onToggleClick']);




const languageActions = [
  {
    label: 'Español',
    clickHandler: () => {
      locale.value = 'es';
      localStorage.setItem('user-locale', 'es');
    }
  },
  {
    label: 'English',
    clickHandler: () => {
      locale.value = 'en';
      localStorage.setItem('user-locale', 'en');
    }
  }
];

const data = {
  profileURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  companies: [
    { label: 'Company 1', value: 'company1' },
    { label: 'Company 2', value: 'company2' },
    { label: 'Company 3', value: 'company3' },
  ],
}
const topBar = ref(null)
const openNotMenu = ref(false);
const toggleDropdownNot = () => {
  if(!openNotMenu.value)
    openProfileMenu.value = false;
  openNotMenu.value = !openNotMenu.value;
}
const openProfileMenu = ref(false);
const toggleDropdownProfile = () => {
  if(!openProfileMenu.value)
    openNotMenu.value = false;
  openProfileMenu.value = !openProfileMenu.value;
}
onClickOutside(topBar, () => {
  closeDropdowns()
});

const notifications = ref([
  { text: 'Lorem Ipsum 1', link:'/not1', isNew:true},
  { text: 'Lorem Ipsum 2', link:'/not2', isNew:false},
  { text: 'Lorem Ipsum 3', link:'/not3', isNew:false},
])

const haveNewNotifications = computed(()=>{
  let response = false;
  for(let i=0;i<notifications.value.length;i++){
    if(notifications.value[i].isNew){
      response = true;
    }
  }
  return response;
})

const profileOptions = ref([
  { text: 'Mi Perfil', link:'/profile'},
  { text: 'Ajustes', link:'/settings'},
  { text: 'Configuracion', link:'/config'},
])

const changeCompany = () =>{
  console.log("New Company selected")
}

const closeDropdowns = () => {
  openNotMenu.value = false;
  openProfileMenu.value = false;
}
</script>

<template>
  <div class="top-bar" ref="topBar">
    <div class="top-bar__mobile">
      <button
        class="top-bar__mobile__side-menu-toggle"
        @click="emit('onToggleClick')"
      >
        <FontAwesomeIcon :icon="isMobileMenuVisible ? ['fas', 'bars'] : ['fas', 'times']" />
      </button>

      <img
        src="../../images/logo-ventura.svg"
        alt="Ventura | Nómina 365"
      >
      <img :src="data.profileURL" alt="profile" @click="toggleDropdownProfile" class="absolute -right-4 rounded-full w-12 h-12 object-cover aspect-square">
    </div>

    <div class="top-bar__desktop ">
      <h1 class="inline-flex">
        {{ $t($route.meta.title) }}
      </h1>
      <div class="ml-4 flex gap-8 items-center h-full w-auto">
        <Dropdown :options="data.companies" :value="data.companies&&data.companies[0]" @onOptionSelected="changeCompany" class="whitespace-nowrap w-96" @click="closeDropdowns"/>
        <button class="bg-light-4 rounded-full h-12 w-12 relative" @click="toggleDropdownNot">
          <FontAwesomeIcon :icon="['far', 'bell']" class="text-main w-5 h-5" />
          <FontAwesomeIcon v-if="haveNewNotifications" :icon="['fas', 'circle']" class="text-error w-2 h-2 absolute right-[14px] top-3" />
          <FontAwesomeIcon v-else :icon="['far', 'circle']" class="text-main w-2 h-2 absolute right-[14px] top-3" />
        </button>
        <img :src="data.profileURL" alt="profile" @click="toggleDropdownProfile" class="rounded-full w-14 h-14 object-cover aspect-square cursor-pointer">
      </div>
      <ActionsDropdown
        :actions="languageActions"
        :dropdownLabel="$t('misc.language')"
        :icon="['fas', 'globe']"
        @click="closeDropdowns"
      />
    </div>
    <!-- Menu Notificaciones -->
    <div v-if="openNotMenu" class="drop-menu-container">
      <ul>
        <li v-for="(not, index) in notifications" :key="index">
          <a :href="not.link">{{ not.text }}</a>
        </li>
      </ul>
    </div>
    <!-- Menu Perfil -->
    <div v-if="openProfileMenu" class="drop-menu-container !w-72">
      <ul>
        <li v-for="(opt, index) in profileOptions" :key="index" class="!text-main">
          <a :href="opt.link">{{ opt.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.top-bar {
  @apply min-h-[80px] sm:min-h-[100px] border-b border-light flex items-center px-10;

  &__mobile {
    @apply lg:hidden w-full relative flex items-center justify-center;

    &__side-menu-toggle {
      @apply absolute -left-4 text-main;

      svg {
        @apply h-[20px];
      }
    }
  }

  &__desktop {
    @apply hidden lg:flex w-full justify-between items-center gap-4;

    h1 {
      @apply text-main text-2xl font-bold;
    }
  }

  .drop-menu-container{
    @apply fixed top-[80px] sm:top-[100px] right-0 lg:right-8 w-60 lg:w-96 bg-white lg:rounded-b-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10;
    ul{
      @apply divide-y px-4 py-2;
    }
    li{
      @apply font-mulish text-dark-2 p-2;
    }
  }
}
</style>
