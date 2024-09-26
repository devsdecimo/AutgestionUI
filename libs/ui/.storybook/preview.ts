import '../src/styles/ui.scss'
import type { Preview } from "@storybook/vue3";
import '@fortawesome/fontawesome-free/css/all.css';

const preview: Preview = {
    parameters: {
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
    },
    tags: ['autodocs'],
  };
  
  export default preview;
  