import { create } from '@storybook/theming';
import { darkTheme as catnipTheme } from '../src/themes';

export default create({
  base: 'dark',

  colorPrimary: catnipTheme.colors.primary,
  colorSecondary: catnipTheme.colors.secondary,

  // UI
  appBg: catnipTheme.colors.backgroundSecondary,
  appContentBg: catnipTheme.colors.backgroundPrimary,
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: catnipTheme.colors.primary,
  barBg: catnipTheme.colors.backgroundSecondary,

  // Form colors
  inputBg: catnipTheme.colors.backgroundPrimary,
  inputBorder: 'white',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'Catnip UI storybook',
  brandUrl: 'https://ashleyndavid.com',
  brandImage: '/catnip.svg',
  brandTarget: '_self',
});
