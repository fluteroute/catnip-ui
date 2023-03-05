import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../Box';
import { Grid } from '.';
import { Typography } from '../Typography';

export default {
  title: 'Example/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const GridBox = () => (
  <Box bg="primary" sx={{ p: 2 }}>
    <Typography variant="body1">Box</Typography>
  </Box>
);

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  gap: 2,
  columns: [1, 2, 4],
};

export const OffCenter = Template.bind({});
OffCenter.args = {
  gap: 2,
  columns: [1, 1, '1fr 2fr'],
};
