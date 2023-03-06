import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '.';

export default {
  title: 'Example/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: 'https://ashleyndavid.com',
};

export const Nav = Template.bind({});
Nav.args = {
  children: 'Link',
  href: 'https://ashleyndavid.com',
  variant: 'nav',
};
