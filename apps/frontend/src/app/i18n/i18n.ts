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
import vacationDetailEN from './vacation/detail/en';
import vacationDetailES from './vacation/detail/es';
import organizationLocationEN from './organizationLocation/en';
import organizationLocationES from './organizationLocation/es';
import asociationEN from './asociation/en';
import asociationES from './asociation/es';
import salariesEN from './salaries/en';
import salariesES from './salaries/es';
import salaryDetailEN from './salaries/detail/en';
import salaryDetailES from './salaries/detail/es';
import vacationCreateEN from './vacation/create/en';
import vacationCreateES from './vacation/create/es';
import vacationYearReportEN from './vacation/year-report/en';
import vacationYearReportES from './vacation/year-report/es';
import vacationResolutionsEN from './vacation/resolutions/en';
import vacationResolutionsES from './vacation/resolutions/es';
import vacationApproveEN from './vacation/approve/en';
import vacationApproveES from './vacation/approve/es';
import paymentEN from './payment/en';
import paymentES from './payment/es';
import permissionsCreateEN from './permissions/create/en';
import permissionsCreateES from './permissions/create/es';
import permissionsResolutionsEN from './permissions/resolutions/en';
import permissionsResolutionsES from './permissions/resolutions/es';
import actionsEN from './actions/en';
import actionsES from './actions/es';
import requestsEN from './requests/en';
import requestsES from './requests/es';
import requestDetailEN from './requests/detail/en';
import requestDetailES from './requests/detail/es';
import timeEN from './time/en';
import timeES from './time/es';
import timeRecordsEN from './time/records/en';
import timeRecordsES from './time/records/es';
import titlesEN from './titles/en';
import titlesES from './titles/es';

const messages = {
  en: {
    login: loginEN,
    home: homeEN,
    contract: contractEN,
    additionalIndentifications: addtionalIdentificationsEN,
    record: recordEN,
    vacation: vacationEN,
    vacationRequest: vacationRequestEN,
    personalReferences: personalReferencesEN,
    permissions: permissionsEN,
    vacationDetail: vacationDetailEN,
    vacationCreate: vacationCreateEN,
    vacationYearReport: vacationYearReportEN,
    vacationResolutions: vacationResolutionsEN,
    vacationApprove: vacationApproveEN,
    profile: profileEN,
    organizationLocation : organizationLocationEN,
    asociation: asociationEN,
    salaries: salariesEN,
    salaryDetail: salaryDetailEN,
    payment: paymentEN,
    permissionsCreate: permissionsCreateEN,
    permissionsResolution: permissionsResolutionsEN,
    actions: actionsEN,
    requests: requestsEN,
    requestDetail: requestDetailEN,
    time: timeEN,
    timeRecords: timeRecordsEN,
    titles: titlesEN,
    misc: { language: 'Language' },
  },
  es: {
    login: loginES,
    home: homeES,
    contract: contractES,
    additionalIndentifications: addtionalIdentificationsES,
    record: recordES,
    vacation: vacationES,
    vacationRequest: vacationRequestES,
    personalReferences: personalReferencesES,
    permissions: permissionsES,
    vacationDetail: vacationDetailES,
    vacationCreate: vacationCreateES,
    vacationYearReport: vacationYearReportES,
    vacationResolutions: vacationResolutionsES,
    vacationApprove: vacationApproveES,
    profile: profileES,
    organizationLocation : organizationLocationES,
    asociation: asociationES,
    salaries: salariesES,
    payment: paymentES,
    permissionsCreate: permissionsCreateES,
    permissionsResolution: permissionsResolutionsES,
    actions: actionsES,
    requests: requestsES,
    requestDetail: requestDetailES,
    salaryDetail: salaryDetailES,
    time: timeES,
    timeRecords: timeRecordsES,
    titles: titlesES,
    misc: { language: 'Idioma' },
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
