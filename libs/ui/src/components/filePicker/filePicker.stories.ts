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

