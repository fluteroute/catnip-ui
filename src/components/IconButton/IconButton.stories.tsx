import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alarm } from '@material-ui/icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { IconButton } from '.';

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    isDisabled: false,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Alarm fontSize="inherit" />,
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: <Alarm fontSize="inherit" />,
  variant: 'primaryOutline',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <Alarm fontSize="inherit" />,
  variant: 'secondary',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  children: <Alarm fontSize="inherit" />,
  variant: 'secondaryOutline',
};

export const IconButtonWithAButton = () => (
  <Box sx={{ display: 'flex' }}>
    <Button sx={{ mr: 1 }}>Button</Button>
    <IconButton>
      <Alarm fontSize="inherit" />
    </IconButton>
  </Box>
);
