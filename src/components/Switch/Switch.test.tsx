import React from 'react';
import { fireEvent, render, screen } from '../../utils/setupTests';
import { Switch } from './Switch';

test('[components] Button: should render', () => {
  const onChangeSpy = jest.fn();
  render(<Switch onChange={onChangeSpy}>Switch</Switch>);

  expect(screen.getByText('Switch')).toBeDefined();

  fireEvent.click(screen.getByText('Switch'));
  expect(onChangeSpy).toHaveBeenCalled();
});
