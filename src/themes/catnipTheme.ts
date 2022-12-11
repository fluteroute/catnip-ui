import { Theme } from '@emotion/react';

export const catnipTheme = {
  colors: {
    primary: '#f0690f',
    lightenPrimary: '#fc802d',
    secondary: '#A64942',
    backgroundPrimary: '#1B1F3A',
    backgroundSecondary: '#53354A',
    textPrimary: '#F5F5F5',
    lightenTextPrimary: '#FFFFFF',
    disabled: '#999593',
  },
  typography: {
    h1: {
      color: '#F5F5F5',
      fontFamily: 'Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif',
      fontSize: 50,
      fontStyle: 'normal',
    },
    button: {
      color: '#F5F5F5',
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
