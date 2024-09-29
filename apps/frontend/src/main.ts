import './styles.scss';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import App from './app/App.vue';
import Router from './app/routes/router';

library.add(fas, far, fab);

createApp(App)
  .use(Router)
  .mount('#root');
