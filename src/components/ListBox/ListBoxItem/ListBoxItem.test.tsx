import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { ListBoxItem } from './ListBoxItem';

test('[components:ListBox] ListBoxItem: should render', () => {
  render(
    <ul>
      <ListBoxItem>item</ListBoxItem>
    </ul>
  );

  expect(screen.getByText('item')).toBeDefined();
});
