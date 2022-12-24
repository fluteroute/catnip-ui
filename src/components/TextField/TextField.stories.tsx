import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '.';

export default {
  title: 'Example/TextField',
  component: TextField,
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
  },
  args: {
    isDisabled: false,
    isRequired: false,
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField label="Name" {...args} />;

export const Default = Template.bind({});
