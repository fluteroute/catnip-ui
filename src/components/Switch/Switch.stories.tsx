import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '.';

export default {
  title: 'Example/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};
