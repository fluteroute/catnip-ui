import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CatnipTheme, darkTheme, lightTheme } from '../../themes';
import { useTheme as useEmotionTheme } from '@emotion/react';

export interface CatnipProviderProps {
  children?: React.ReactNode;
  variant?: 'dark' | 'light';
  theme?: Pick<React.ComponentProps<ThemeProvider>, 'theme'>;
}

function CatnipProvider(props: CatnipProviderProps) {
  const { children, variant = 'dark', theme: themeProp } = props;

  const theme = !themeProp ? (variant === 'dark' ? darkTheme : lightTheme) : themeProp;

  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
}

CatnipProvider.displayName = 'CatnipProvider';

export default CatnipProvider;

export const useTheme = () => {
  const theme = useEmotionTheme();

  return theme as CatnipTheme;
};
