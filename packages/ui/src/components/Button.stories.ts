import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    bg: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bg: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    bg: 'secondary',
  },
};
