import React from 'react';
import CatnipProvider from '../src/components/CatnipProvider/CatnipProvider';
import { DecoratorFn } from '@storybook/react';

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <CatnipProvider>
      <div className="percy-only-css-global">
        <StoryFn />
      </div>
    </CatnipProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
