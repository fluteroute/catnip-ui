import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isDisabled: {
      control: 'boolean',
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

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: 'Button',
  variant: 'primaryOutline',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  children: 'Button',
  variant: 'secondaryOutline',
};
