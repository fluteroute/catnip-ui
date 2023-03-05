import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '.';

export default {
  title: 'Example/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider m={4} {...args} />;

export const Default = Template.bind({});
