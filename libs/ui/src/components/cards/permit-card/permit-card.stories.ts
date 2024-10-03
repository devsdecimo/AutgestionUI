import PermitCard from './permit-card.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default {
  title: 'Components/Cards/PermitCard',
  component: PermitCard,
  parameters: {
    docs: {
      description: {
        component: `Este componente sirve para crear una card con informacion sobre permisos solicitados`,
      },
    },
  },
  argTypes: {
    name: {
      control:'text',
    },
    schedule: {
      control:'text',
    },
    state: {
      control:'text',
    },
    color: {
      control: 'select', options: ['main', 'dark-2']
    }

  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { PermitCard, FontAwesomeIcon },
  setup() {
    return { args };
  },
  template: `
    <PermitCard v-bind="args"></PermitCard>
  `,
});

export const Main = Template.bind({});
Main.args = {
  color: 'main'
};
export const Dark = Template.bind({});
Dark.args = {
  color: 'dark-2'
};



