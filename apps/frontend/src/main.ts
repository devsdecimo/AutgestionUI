import './styles.scss';

import { createApp } from 'vue';
import App from './app/App.vue';
import Router from './app/routes/router';

createApp(App)
  .use(Router)
  .mount('#root');
