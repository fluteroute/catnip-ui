import React from 'react';
import { ListBox, ListBoxItem } from '.';
import { ComponentMeta } from '@storybook/react';
import { Link } from '../Link';

export default {
  title: 'Components/ListBox',
  component: ListBox,
} as ComponentMeta<typeof ListBox>;

export const Default = () => (
  <ListBox role="listbox" variant="none">
    <Link variant="nav" href="google.com">
      <ListBoxItem role="listitem">Home</ListBoxItem>
    </Link>
    <Link variant="nav">
      <ListBoxItem>About</ListBoxItem>
    </Link>
    <Link variant="nav">
      <ListBoxItem>Career</ListBoxItem>
    </Link>
    <Link variant="nav">
      <ListBoxItem>Contact</ListBoxItem>
    </Link>
  </ListBox>
);

export const Bullet = () => (
  <ListBox role="listbox" variant="bullet">
    <Link variant="nav" href="google.com">
      <ListBoxItem role="listitem">Home</ListBoxItem>
    </Link>
    <Link variant="nav">
      <ListBoxItem>About</ListBoxItem>
    </Link>
    <Link variant="nav">
      <ListBoxItem>Career</ListBoxItem>
    </Link>
    <Link variant="nav">
      <ListBoxItem>Contact</ListBoxItem>
    </Link>
  </ListBox>
);
