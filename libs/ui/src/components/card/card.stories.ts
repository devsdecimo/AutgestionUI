import Card from './card.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; // Asegúrate de importar la librería

// Agrega los íconos a la librería global de FontAwesome
library.add(fas);

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `Este componente sirve para crear una card con contenido custom. Tiene slots para header (que puede funcionar como carousel o no), footer, content y right icon, cada slot tiene un prop booleano que lo activa o desactiva.`,
      },
    },
  },
  argTypes: {
    withHeader: {
      control:'boolean',
    },
    withFooter: {
      control:'boolean',
    },
    withRightIcon: {
      control:'boolean',
    },
    isDropdown: {
      control:'boolean',
    },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { Card, FontAwesomeIcon },
  setup() {
    return { args };
  },
  template: `
    <Card v-bind="args">
      <template #header>
        <h3>Este es el header</h3>
      </template>
      <template #principal-content>
        <p>Contenido principal de la card.</p>
        <p>Contenido principal de la card.</p>
        <p>Contenido principal de la card.</p>
        <p>Contenido principal de la card.</p>
      </template>
      <template #footer>
        <p>Este es el footer</p>
      </template>
      <template #right-icon>
        <FontAwesomeIcon :icon="['fas', 'house']" class="text-white"></FontAwesomeIcon>
      </template>
    </Card>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};

export const WithHeader = Template.bind({});
WithHeader.args = {
  withHeader: true,
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  isDropdown: true,
  withHeader: true
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  withFooter: true,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  withRightIcon: true,
};


export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {
  withHeader: true,
  withFooter:true
};


