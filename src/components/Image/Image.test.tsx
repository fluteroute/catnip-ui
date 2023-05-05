import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Image } from './Image';

test('[components] Image: should render', () => {
  render(<Image alt="avatar" src="avatar.jpeg" />);

  expect(screen.getByAltText('avatar')).toBeDefined();
});
