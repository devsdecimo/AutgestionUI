// src/app/i18n.ts
import { createI18n } from 'vue-i18n';

//import lang dicts
import loginEN from './login/en';
import loginES from './login/es';
import addtionalIdentificationsEN from './additional-identifications/en';
import addtionalIdentificationsES from './additional-identifications/es';
import recordEN from './record/en';
import recordES from './record/es';

const messages = {
  en: {
    login: {
      ...loginEN,
    },
    misc: {
      language: 'Language'
    },
    additionalIndentifications: {
      ...addtionalIdentificationsEN
    },
    record: {
      ...recordEN,
    }
  },
  es: {
    login: {
     ...loginES,
    },
    misc: {
      language: 'Idioma'
    },
    additionalIndentifications: {
      ...addtionalIdentificationsES
    },
    record: {
      ...recordES,
    }
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
