import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '.';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box p={4} color="background" bg="primary" {...args} />
);

export const Default = Template.bind({});
