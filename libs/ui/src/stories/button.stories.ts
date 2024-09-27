import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Base/Buttons',
  argTypes: {
    label: {
      control: 'text'
    },
    type: {
      control: 'select',
      options: ['default', 'main', 'success', 'warning', 'error']
    },
  },
  args: {
    label: 'Button',
    type: 'main'
  },
};

export default meta;

type Story = StoryObj;

export const Button: Story = {
  render: (args) => ({
    setup() {
      return { args };
    },
    computed: {
      getButtonClass() { return `btn--${args.type}` }
    },
    template: `<button :class="getButtonClass">{{ args.label }}</button>`,
  })
};
