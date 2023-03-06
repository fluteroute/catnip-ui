import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageSpinner } from '.';

export default {
  title: 'Components/ImageSpinner',
  component: ImageSpinner,
} as ComponentMeta<typeof ImageSpinner>;

const Template: ComponentStory<typeof ImageSpinner> = (args) => <ImageSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/catnip.svg',
  height: 70,
  width: 70,
  label: 'Loading...',
};
