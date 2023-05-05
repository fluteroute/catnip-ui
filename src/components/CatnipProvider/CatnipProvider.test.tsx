import React from 'react';
import { render } from '../../utils/setupTests';
import { CatnipProvider } from './CatnipProvider';

test('[components] CatnipProvider: should render', () => {
  render(<CatnipProvider />);
});
