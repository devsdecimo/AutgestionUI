import StyledButton from './styled_button.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/StyledButton',
  component: StyledButton,
  parameters: {
    docs: {
      description: {
        component: `Este componente de botón soporta tres skins: primario, secundario e inactivo. Puedes controlar el estado deshabilitado con el prop 'disabled'.`,
      },
    },
  },
  argTypes: {
    skin: {
      control: { type: 'select' },
      options: ['main', 'secondary', 'inactive'],
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { StyledButton },
  setup() {
    return { args };
  },
  template: '<StyledButton v-bind="args">{{ args.default }}</StyledButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  skin: 'main',
  disabled: false,
  default: 'Botón Primario',
};

export const Secondary = Template.bind({});
Secondary.args = {
  skin: 'secondary',
  disabled: false,
  default: 'Botón Secundario',
};

export const Inactive = Template.bind({});
Inactive.args = {
  skin: 'inactive',
  disabled: true,
  default: 'Botón Inactivo',
};
