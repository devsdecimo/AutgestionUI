import './styles.scss';

import { createApp } from 'vue';
import App from './app/App.vue';
import { router } from './app/routes/router';

const app = createApp(App)
  .use(router);

app.mount('#root');
