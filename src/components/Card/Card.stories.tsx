import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ` +
    `labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ` +
    `laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ` +
    `voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ` +
    `non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

export const Compact = Template.bind({});
Compact.args = {
  children:
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ` +
    `labore et dolore magna aliqua.`,
  variant: 'compact',
};
