// src/app/i18n.ts
import { createI18n } from 'vue-i18n';

//import lang dicts
import loginEN from './login/en';
import loginES from './login/es';
import homeEN from './home/en';
import homeES from './home/es';
import contractEN from './contract/en';
import contractES from './contract/es';
import recordEN from './record/en';
import recordES from './record/es';
import organizationLocationEN from './organizationLocation/en';
import organizationLocationES from './organizationLocation/es';

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
    organizationLocation: {
      ...organizationLocationEN
    },
    record: {
      ...recordEN,
    },
    misc: {
      language: 'Language'
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
    organizationLocation: {
      ...organizationLocationES
    },
    record: {
      ...recordES,
    },
    misc: {
      language: 'Idioma'
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
