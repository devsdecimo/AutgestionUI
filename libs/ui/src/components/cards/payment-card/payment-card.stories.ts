import PaymentCard from './payment-card.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default {
  title: 'Components/Cards/PaymentCard',
  component: PaymentCard,
  parameters: {
    docs: {
      description: {
        component: `Este componente sirve para crear una card con informacion de un metodo de pago`,
      },
    },
  },
  argTypes: {
    name: {
      control:'text',
    },
    bank: {
      control:'text',
    },
    currency: {
      control:'text',
    },
    icon: {
      control: 'object'
    },
    account: {
      control:'text'
    }

  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { PaymentCard, FontAwesomeIcon },
  setup() {
    return { args };
  },
  template: `
    <PaymentCard v-bind="args"></PaymentCard>
  `,
});

export const Colons = Template.bind({});
Colons.args = {
  icon: ['fas', 'colon-sign'],
  currency: 'Colones'
};

export const Dollars = Template.bind({});
Dollars.args = {
  icon: ['fas', 'dollar-sign'],
  currency: 'Dólares'
};




