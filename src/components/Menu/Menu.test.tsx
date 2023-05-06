import React from 'react';
import { act, fireEvent, render, screen } from '../../utils/setupTests';
import { ListBoxItem } from '../ListBox';
import { Menu } from './Menu';

test('[components] Menu: should render', async () => {
  render(
    <Menu>
      <ListBoxItem>item</ListBoxItem>
    </Menu>
  );

  await act(async () => fireEvent.click(screen.getByLabelText('Navigation Menu')));

  expect(screen.getByText('item')).toBeDefined();
});
