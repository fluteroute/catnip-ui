import React from 'react';
import { fireEvent, render, screen } from '../../utils/setupTests';
import { Alarm } from '@material-ui/icons';
import { IconButton } from './IconButton';

test('[components] IconButton: should render', () => {
  const onClickSpy = jest.fn();
  render(
    <IconButton aria-label="button" onClick={onClickSpy}>
      <Alarm fontSize="inherit" />
    </IconButton>
  );

  expect(screen.getByLabelText('button')).toBeDefined();

  fireEvent.click(screen.getByLabelText('button'));
  expect(onClickSpy).toHaveBeenCalled();
});
