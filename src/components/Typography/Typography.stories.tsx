import React from 'react';
import { baseTheme } from '../../themes/catnipTheme';
import { ComponentMeta } from '@storybook/react';
import { Typography } from '.';

export default {
  title: 'Example/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default = () => {
  const variants = Object.keys(baseTheme.typography) as (keyof typeof baseTheme.typography)[];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {variants.map((variant, index) => (
        <Typography key={`${variant}-${index}`} variant={variant}>
          {variant as string}{' '}
        </Typography>
      ))}
    </div>
  );
};
