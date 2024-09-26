import type { Meta, StoryObj } from '@storybook/vue3';
import grid_item from './grid_item.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof grid_item> = {
  component: grid_item,
  title: 'grid_item',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to grid_item!/gi)).toBeTruthy();
  },
};
