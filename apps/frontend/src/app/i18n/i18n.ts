// src/app/i18n.ts
import { createI18n } from 'vue-i18n';

//import lang dicts
import loginEN from './login/en';
import loginES from './login/es';
import profileEN from './profile/en';
import profileES from './profile/es';
import addtionalIdentificationsEN from './additional-identifications/en';
import addtionalIdentificationsES from './additional-identifications/es';
import homeEN from './home/en';
import homeES from './home/es';
import contractEN from './contract/en';
import contractES from './contract/es';
import recordEN from './record/en';
import recordES from './record/es';
import vacationEN from './vacation/en';
import vacationES from './vacation/es';
import vacationRequestEN from './vacation/request/en';
import vacationRequestES from './vacation/request/es';
import personalReferencesEN from './personal-references/en';
import personalReferencesES from './personal-references/es';
import permissionsEN from './permissions/en';
import permissionsES from './permissions/es';

const messages = {
  en: {
    login: {
      ...loginEN,
    },
    home: {
      ...homeEN,
    },
    contract:{
      ...contractEN
    },
    additionalIndentifications: {
      ...addtionalIdentificationsEN
    },
    record: {
      ...recordEN,
    },
    vacation: {
      ...vacationEN,
    },
    vacationRequest: {
      ...vacationRequestEN,
    },
    personalReferences: {
      ...personalReferencesEN,
    },
    permissions: {
      ...permissionsEN,
    },
    misc: {
      language: 'Language'
    },
    profile: {
      ...profileEN,
    },
  },
  es: {
    login: {
     ...loginES,
    },
    home: {
      ...homeES,
    },
    contract:{
      ...contractES
    },
    additionalIndentifications: {
      ...addtionalIdentificationsES
    },
    record: {
      ...recordES,
    },
    vacation: {
      ...vacationES,
    },
    vacationRequest: {
      ...vacationRequestES,
    },
    personalReferences: {
      ...personalReferencesES,
  },
    permissions: {
      ...permissionsES,
    },
    misc: {
      language: 'Idioma'
    },
    profile: {
      ...profileES,
    },
  },
};


// Función para obtener el idioma predeterminado
const getDefaultLocale = (): string => {
  const browserLocale = navigator.language;

  if (browserLocale.startsWith('es')) {
  return 'es';
  } else {
  return 'en';
  }
};

// Crear la instancia de i18n
const i18n = createI18n({
  locale: localStorage.getItem('user-locale') || getDefaultLocale(),
  fallbackLocale: 'en',
  messages,
});

export default i18n;
