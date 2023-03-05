// https://ashleyndavid.com/AD_logo_2.svg

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '.';

export default {
  title: 'Example/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://ashleyndavid.com/AD_logo_2.svg',
};

// TODO: Replace with photo that is hosted by ashleyndavid.com
export const Avatar = Template.bind({});
Avatar.args = {
  src: 'https://media.licdn.com/dms/image/C4E03AQEIorpXK6V3EQ/profile-displayphoto-shrink_800_800/0/1660248683370?e=2147483647&v=beta&t=Oz1Snou-isRmFcxwbfAw4N_ejTQNto7CVcXyqyY0BK0',
  variant: 'avatar',
};
