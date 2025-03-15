import type { Preview } from '@storybook/react';
import React from 'react';
import { testThemeClass } from '../src/styles/theme/colors.css';

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={testThemeClass}>
      <Story />
    </div>
  ),
];

export default preview;
