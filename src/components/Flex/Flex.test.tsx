import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Flex } from './Flex';

test('[components] Flex: should render', () => {
  render(<Flex>content</Flex>);

  expect(screen.getByText('content')).toBeDefined();
});
