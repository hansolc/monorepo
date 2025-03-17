import type { Preview } from '@storybook/react';
import React from 'react';
import { defaultThemeClasses } from '../src/styles/theme/colors.css';

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
    <div className={defaultThemeClasses}>
      <Story />
    </div>
  ),
];

export default preview;
