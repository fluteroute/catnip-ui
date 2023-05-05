import React from 'react';
import { fireEvent, render, screen } from '../../utils/setupTests';
import { Alarm } from '@material-ui/icons';
import { IconButton } from './IconButton';

test('[components] IconButton: should render', () => {
  const onClickSpy = jest.fn();
  render(
    <IconButton onClick={onClickSpy}>
      <Alarm fontSize="inherit" />
    </IconButton>
  );

  expect(screen.getByText('button')).toBeDefined();

  fireEvent.click(screen.getByText('button'));
  expect(onClickSpy).toHaveBeenCalled();
});
