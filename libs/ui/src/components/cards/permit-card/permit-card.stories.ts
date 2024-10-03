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
    applicationNumber: {
      control:'number',
    },
    id: {
      control:'text',
    },
    actionType: {
      control:'text',
    },
    registrationDate: {
      control:'text',
    },
    startDate: {
      control:'text',
    },
    endDate: {
      control:'text',
    },
    reason: {
      control:'text',
    },
    state: {
      control:'text',
    },
    doc: {
      control:'text',
    },
    time: {
      control:'text',
    },
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
Main.args = {};




