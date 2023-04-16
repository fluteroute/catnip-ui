import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Flex } from '../Flex';
import { Link } from '../Link';
import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const Default = () => (
  <Menu align="start" side="right">
    <Flex sx={{ flexDirection: 'column' }}>
      <Link variant="nav">Home</Link>
      <Link variant="nav">About</Link>
      <Link variant="nav">Career</Link>
      <Link variant="nav">Contact</Link>
    </Flex>
  </Menu>
);

export const Open = () => (
  <Menu align="start" side="right" open={true}>
    <Flex sx={{ flexDirection: 'column' }}>
      <Link variant="nav">Home</Link>
      <Link variant="nav">About</Link>
      <Link variant="nav">Career</Link>
      <Link variant="nav">Contact</Link>
    </Flex>
  </Menu>
);
