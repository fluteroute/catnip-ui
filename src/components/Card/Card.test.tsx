import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Card } from './Card';

test('[components] Button: should render', () => {
  render(<Card>card</Card>);

  expect(screen.getByText('card')).toBeDefined();
});
