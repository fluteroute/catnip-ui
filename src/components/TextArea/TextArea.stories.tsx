import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '.';

export default {
  title: 'Example/TextArea',
  component: TextArea,
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
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea label="Description" {...args} />
);

export const Default = Template.bind({});
