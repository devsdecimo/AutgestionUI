import type { Meta, StoryObj } from '@storybook/vue3';
import filePicker from './filePicker.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof filePicker> = {
  component: filePicker,
  title: 'components/filePicker',
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
    await expect(canvas.getByText(/Welcome to filePicker!/gi)).toBeTruthy();
  },
};
