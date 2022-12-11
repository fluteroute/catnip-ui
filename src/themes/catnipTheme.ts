import { Theme } from '@emotion/react';

export const catnipTheme = {
  colors: {
    primary: '#f0690f',
    lightenPrimary: '#fc802d',
    secondary: '#A64942',
    backgroundPrimary: '#1B1F3A',
    backgroundSecondary: '#53354A',
    textPrimary: '#ffffff',
  },
  typography: {
    h1: {
      color: '#ffffff',
      fontFamily: 'Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif',
      fontSize: 50,
      fontStyle: 'normal',
    },
    button: {
      color: '#ffffff',
      fontFamily: 'Source Code Pro, Arial',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
  },
};

export type CatnipTheme = Theme & typeof catnipTheme;
