import JobCard from './job-card.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

export default {
  title: 'Components/Cards/JobCard',
  component: JobCard,
  parameters: {
    docs: {
      description: {
        component: `Este componente sirve para crear una card con informacion de un puesto de trabajo`,
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
  components: { JobCard, FontAwesomeIcon },
  setup() {
    return { args };
  },
  template: `
    <JobCard v-bind="args"></JobCard>
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



