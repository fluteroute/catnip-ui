import { Theme } from '@emotion/react';

const baseTheme = {
  colors: {
    primary: '#f0690f',
    lightenPrimary: '#fc802d',
    secondary: '#A64942',
    lightenSecondary: '#C35850',
    backgroundSecondary: '#53354A',
    textPrimary: '#F5F5F5',
    lightenTextPrimary: '#FFFFFF',
    disabled: '#999593',
  },
  typography: {
    h1: {
      fontFamily: 'Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif',
      fontSize: 50,
      fontStyle: 'normal',
    },
    button: {
      fontFamily: 'Source Code Pro, Arial',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    backgroundPrimary: '#1B1F3A',
    ...baseTheme.colors,
  },
  typography: baseTheme.typography,
};

export const lightTheme = {
  mode: 'light',
  colors: {
    backgroundPrimary: '#FFFFFF',
    ...baseTheme.colors,
  },
  typography: baseTheme.typography,
};

export type CatnipTheme = Theme & typeof darkTheme;
