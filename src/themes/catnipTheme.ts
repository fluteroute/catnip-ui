import { baseTheme } from './baseTheme';
import type { Theme } from 'theme-ui';

export const darkTheme = {
  colors: {
    backgroundPrimary: '#1B1F3A',
    textPrimary: '#F5F5F5',
    lightenTextPrimary: '#FFFFFF',
    textSecondary: '#E5E4E4',
    ...baseTheme.colors,
  },
  text: baseTheme.typography,
  buttons: {
    disabled: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: '0px',
      padding: '12px',
      color: '#F5F5F5',
      backgroundColor: 'disabled',
      '&:hover': {
        backgroundColor: 'disabled',
      },
      ':focus, :focus-visible': {
        outline: 'none',
      },
    },
    disabledOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: '2px',
      padding: '10px',
      '&:hover': {
        borderColor: 'disabled',
        color: 'disabled',
      },
      '&:focus, :focus-visible': {
        borderColor: 'disabled',
        color: 'disabled',
        outline: 'none',
      },
      borderColor: 'disabled',
      color: 'disabled',
    },
    primary: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: '0px',
      padding: '12px',
      color: '#F5F5F5',
      backgroundColor: 'primary',
      '&:hover': {
        backgroundImage: `linear-gradient(to left, ${
          baseTheme.colors.lightenPrimary
        }, ${'primary'})`,
        backgroundColor: baseTheme.colors.lightenPrimary,
        color: '#FFFFFF',
      },
      '&:focus, :focus-visible': {
        outline: 'primary',
      },
    },
    primaryOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: '2px',
      padding: '10px',
      color: '#F5F5F5',
      '&:hover': {
        borderColor: baseTheme.colors.lightenPrimary,
        color: '#FFFFFF',
      },
      '&:focus, :focus-visible': {
        borderColor: baseTheme.colors.lightenPrimary,
        outline: 'primary',
      },
      borderColor: 'primary',
    },
    secondary: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: '0px',
      padding: '12px',
      color: '#F5F5F5',
      backgroundColor: 'secondary',
      '&:hover': {
        backgroundImage: `linear-gradient(to left, ${baseTheme.colors.lightenSecondary}, ${baseTheme.colors.secondary})`,
        backgroundColor: 'lightenSecondary',
        color: '#FFFFFF',
      },
      '&:focus, :focus-visible': {
        outline: 'secondary',
      },
    },
    secondaryOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: '2px',
      padding: '10px',
      color: '#F5F5F5',
      '&:hover': {
        borderColor: 'lightenSecondary',
        color: '#FFFFFF',
      },
      '&:focus, :focus-visible': {
        borderColor: 'lightenSecondary',
        outline: 'secondary',
      },
      borderColor: 'secondary',
    },
  },
  forms: {
    input: {
      ...baseTheme.typography.body1,
      background: 'linear-gradient(#F5F5F5, #F5F5F5) bottom/ calc(100% - 2*3px) 3px no-repeat',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: '0px',
      color: 'textPrimary',
      height: '35px',
      padding: '5px',
      margin: '5px',
      width: '100%',
      '&:focus, :focus-visible': {
        outline: 'none',
        boxShadow: `0 7px 2px -2px ${baseTheme.colors.secondary}`,
      },
      '&[data-disabled]': {
        backgroundColor: 'disabled',
        opacity: 0.5,
      },
    },
  },
};

export const lightTheme = {
  colors: {
    backgroundPrimary: '#FFFFFF',
    textPrimary: '#1A1A1A',
    darkenTextPrimary: '#000000',
    textSecondary: '#C8C5C5',
    ...baseTheme.colors,
  },
  text: baseTheme.typography,
  buttons: {
    disabled: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: '0px',
      padding: '12px',
      backgroundColor: 'disabled',
      '&:hover': {
        backgroundColor: 'disabled',
      },
      ':focus, :focus-visible': {
        outline: 'none',
      },
    },
    disabledOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: '2px',
      padding: '10px',
      '&:hover': {
        borderColor: 'disabled',
        color: 'disabled',
      },
      ':focus, :focus-visible': {
        borderColor: 'disabled',
        color: 'disabled',
        outline: 'none',
      },
      borderColor: 'disabled',
      color: 'disabled',
    },
    primary: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: '0px',
      padding: '12px',
      color: '#F5F5F5',
      backgroundColor: 'primary',
      '&:hover': {
        backgroundImage: `linear-gradient(to left, ${baseTheme.colors.primary}, ${baseTheme.colors.darkenPrimary})`,
        backgroundColor: 'darkenPrimary',
        color: '#DFDCDC',
      },
      '&:focus, :focus-visible': {
        outline: 'primary',
      },
    },
    primaryOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: '2px',
      padding: '10px',
      color: 'primary',
      '&:hover': {
        borderColor: 'darkenPrimary',
        color: 'darkenPrimary',
      },
      '&:focus, :focus-visible': {
        borderColor: 'darkenPrimary',
        outline: 'primary',
      },
      borderColor: 'primary',
    },
    secondary: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      borderWidth: '0px',
      padding: '12px',
      color: '#F5F5F5',
      backgroundColor: 'secondary',
      '&:hover': {
        backgroundImage: `linear-gradient(to left, ${baseTheme.colors.secondary}, ${baseTheme.colors.darkenSecondary})`,
        backgroundColor: baseTheme.colors.darkenSecondary,
        color: '#DFDCDC',
      },
      '&:focus, :focus-visible': {
        outline: 'secondary',
      },
    },
    secondaryOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: '2px',
      padding: '10px',
      color: 'secondary',
      '&:hover': {
        color: baseTheme.colors.darkenSecondary,
        borderColor: baseTheme.colors.darkenSecondary,
      },
      '&:focus, :focus-visible': {
        color: baseTheme.colors.darkenSecondary,
        borderColor: baseTheme.colors.darkenSecondary,
        outline: 'secondary',
      },
      borderColor: 'secondary',
    },
  },
  forms: {
    input: {
      ...baseTheme.typography.body1,
      background: 'linear-gradient(#1A1A1A, #1A1A1A) bottom/ calc(100% - 2*3px) 3px no-repeat',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: '0px',
      color: 'textPrimary',
      height: '35px',
      padding: '5px',
      margin: '5px',
      width: '100%',
      '&:focus, :focus-visible': {
        outline: 'none',
        boxShadow: `0 7px 2px -2px ${baseTheme.colors.secondary}`,
      },
      '&[data-disabled]': {
        backgroundColor: 'disabled',
        opacity: 0.5,
      },
    },
  },
};

export type CatnipTheme = Theme & typeof darkTheme & typeof lightTheme;
