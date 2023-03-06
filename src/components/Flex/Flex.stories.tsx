import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../Box';
import { Flex } from '.';
import { Typography } from '../Typography';

export default {
  title: 'Components/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <Box p={2} bg="primary" color="white" sx={{ flex: '1 1 auto' }}>
      <Typography variant="body1">Flex</Typography>
    </Box>
    <Box p={2} bg="secondary">
      <Typography variant="body1">Box</Typography>
    </Box>
  </Flex>
);

export const Default = Template.bind({});
