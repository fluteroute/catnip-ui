import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    isDisabled: {
      ontrol: 'boolean',
    },
  },
  args: {
    isDisabled: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};
