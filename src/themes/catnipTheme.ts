import { Theme } from '@emotion/react';

export const baseTheme = {
  colors: {
    darkenPrimary: '#E0630F',
    primary: '#f0690f',
    lightenPrimary: '#fc802d',
    darkenSecondary: '#91403A',
    secondary: '#A64942',
    lightenSecondary: '#C35850',
    backgroundSecondary: '#53354A',
    disabled: '#999593',
  },
  typography: {
    h1: {
      fontFamily: 'Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif',
      fontSize: 50,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
    h2: {
      fontFamily: 'Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif',
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
    body1: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
    body2: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
    button: {
      fontFamily: 'Source Code Pro, Arial',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
    label: {
      fontFamily: 'Source Code Pro, Arial',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 200,
      lineHeight: 'normal',
      letterSpacing: 1,
    },
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    backgroundPrimary: '#1B1F3A',
    textPrimary: '#F5F5F5',
    lightenTextPrimary: '#FFFFFF',
    textSecondary: '#E5E4E4',
    ...baseTheme.colors,
  },
  typography: baseTheme.typography,
  components: {
    button: {
      disabled: {
        color: '#F5F5F5',
        backgroundColor: baseTheme.colors.disabled,
        ':hover': {
          backgroundColor: baseTheme.colors.disabled,
        },
        ':focus, :focus-visible': {
          outline: 'none',
        },
      },
      disabledOutline: {
        ':hover': {
          borderColor: baseTheme.colors.disabled,
          color: baseTheme.colors.disabled,
        },
        ':focus, :focus-visible': {
          borderColor: baseTheme.colors.disabled,
          color: baseTheme.colors.disabled,
          outline: 'none',
        },
        borderColor: baseTheme.colors.disabled,
        color: baseTheme.colors.disabled,
      },
      primary: {
        color: '#F5F5F5',
        backgroundColor: baseTheme.colors.primary,
        ':hover': {
          backgroundImage: `linear-gradient(to left, ${baseTheme.colors.lightenPrimary}, ${baseTheme.colors.primary})`,
          backgroundColor: baseTheme.colors.lightenPrimary,
          color: '#FFFFFF',
        },
        ':focus, :focus-visible': {
          outline: baseTheme.colors.primary,
        },
      },
      primaryOutline: {
        color: '#F5F5F5',
        ':hover': {
          borderColor: baseTheme.colors.lightenPrimary,
          color: '#FFFFFF',
        },
        ':focus, :focus-visible': {
          borderColor: baseTheme.colors.lightenPrimary,
          outline: baseTheme.colors.primary,
        },
        borderColor: baseTheme.colors.primary,
      },
      secondary: {
        color: '#F5F5F5',
        backgroundColor: baseTheme.colors.secondary,
        ':hover': {
          backgroundImage: `linear-gradient(to left, ${baseTheme.colors.lightenSecondary}, ${baseTheme.colors.secondary})`,
          backgroundColor: baseTheme.colors.lightenSecondary,
          color: '#FFFFFF',
        },
        ':focus, :focus-visible': {
          outline: baseTheme.colors.secondary,
        },
      },
      secondaryOutline: {
        color: '#F5F5F5',
        ':hover': {
          borderColor: baseTheme.colors.lightenSecondary,
          color: '#FFFFFF',
        },
        ':focus, :focus-visible': {
          borderColor: baseTheme.colors.lightenSecondary,
          outline: baseTheme.colors.secondary,
        },
        borderColor: baseTheme.colors.secondary,
      },
    },
  },
};

export const lightTheme = {
  mode: 'light',
  colors: {
    backgroundPrimary: '#FFFFFF',
    textPrimary: '#1A1A1A',
    darkenTextPrimary: '#000000',
    textSecondary: '#C8C5C5',
    ...baseTheme.colors,
  },
  typography: baseTheme.typography,
  components: {
    button: {
      disabled: {
        backgroundColor: baseTheme.colors.disabled,
        ':hover': {
          backgroundColor: baseTheme.colors.disabled,
        },
        ':focus, :focus-visible': {
          outline: 'none',
        },
      },
      disabledOutline: {
        ':hover': {
          borderColor: baseTheme.colors.disabled,
          color: baseTheme.colors.disabled,
        },
        ':focus, :focus-visible': {
          borderColor: baseTheme.colors.disabled,
          color: baseTheme.colors.disabled,
          outline: 'none',
        },
        borderColor: baseTheme.colors.disabled,
        color: baseTheme.colors.disabled,
      },
      primary: {
        color: '#F5F5F5',
        backgroundColor: baseTheme.colors.primary,
        ':hover': {
          backgroundImage: `linear-gradient(to left, ${baseTheme.colors.primary}, ${baseTheme.colors.darkenPrimary})`,
          backgroundColor: baseTheme.colors.darkenPrimary,
          color: '#DFDCDC',
        },
        ':focus, :focus-visible': {
          outline: baseTheme.colors.primary,
        },
      },
      primaryOutline: {
        color: baseTheme.colors.primary,
        ':hover': {
          borderColor: baseTheme.colors.darkenPrimary,
          color: baseTheme.colors.darkenPrimary,
        },
        ':focus, :focus-visible': {
          borderColor: baseTheme.colors.darkenPrimary,
          outline: baseTheme.colors.primary,
        },
        borderColor: baseTheme.colors.primary,
      },
      secondary: {
        color: '#F5F5F5',
        backgroundColor: baseTheme.colors.secondary,
        ':hover': {
          backgroundImage: `linear-gradient(to left, ${baseTheme.colors.secondary}, ${baseTheme.colors.darkenSecondary})`,
          backgroundColor: baseTheme.colors.darkenSecondary,
          color: '#DFDCDC',
        },
        ':focus, :focus-visible': {
          outline: baseTheme.colors.secondary,
        },
      },
      secondaryOutline: {
        color: baseTheme.colors.secondary,
        ':hover': {
          color: baseTheme.colors.darkenSecondary,
          borderColor: baseTheme.colors.darkenSecondary,
        },
        ':focus, :focus-visible': {
          color: baseTheme.colors.darkenSecondary,
          borderColor: baseTheme.colors.darkenSecondary,
          outline: baseTheme.colors.secondary,
        },
        borderColor: baseTheme.colors.secondary,
      },
    },
  },
};

export type CatnipTheme = Theme & typeof darkTheme & typeof lightTheme;
