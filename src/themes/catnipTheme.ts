import { baseTheme } from './baseTheme';
import { Theme } from '@emotion/react';

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
