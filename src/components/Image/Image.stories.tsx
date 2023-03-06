import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '.';

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: '/catnip.svg',
  height: 200,
  width: 200,
};

export const Avatar = Template.bind({});
Avatar.args = {
  src: '/avatar.jpeg',
  variant: 'avatar',
};
