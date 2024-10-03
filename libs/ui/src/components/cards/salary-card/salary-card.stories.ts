import SalaryCard from './salary-card.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default {
  title: 'Components/Cards/SalaryCard',
  component: SalaryCard,
  parameters: {
    docs: {
      description: {
        component: `Este componente sirve para crear una card con informacion de un salario en la vista "Mis salarios"`,
      },
    },
  },
  argTypes: {
    salaryId: {
      control:'number',
    },
    currency: {
      control: 'select', options: ['Colones', 'Dólares']
    },
    startDate: {
      control:'text',
    },
    endDate: {
      control:'text',
    },
    docLink: {
      control:'text',
    }

  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { SalaryCard, FontAwesomeIcon },
  setup() {
    return { args };
  },
  template: `
    <SalaryCard v-bind="args"></SalaryCard>
  `,
});

export const Colones = Template.bind({});
Colones.args = {
  currency: 'Colones',
  salaryId: 10
};
export const Dollars = Template.bind({});
Dollars.args = {
  currency: 'Dólares',
  salaryId: 11
};



