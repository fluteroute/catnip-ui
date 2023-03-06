import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Spinner } from '.';
import { IconButton } from '../IconButton';
import { CheckCircle } from '@material-ui/icons';

export default {
  title: 'Example/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'teal',
};

export const ButtonWithSpinner = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Button onClick={() => setIsLoading(!isLoading)} sx={{ minWidth: '88px', maxHeight: '44px' }}>
      {isLoading ? <Spinner color="inherit" sx={{ maxHeight: '20px' }} /> : 'Button'}
    </Button>
  );
};

export const IconButtonWithSpinner = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <IconButton onClick={() => setIsLoading(!isLoading)}>
      {isLoading ? <Spinner color="inherit" sx={{ minWidth: '24px' }} /> : <CheckCircle />}
    </IconButton>
  );
};
