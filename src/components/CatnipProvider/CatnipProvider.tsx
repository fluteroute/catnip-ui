import React from 'react';
import { ThemeProvider, useThemeUI } from 'theme-ui';
import { CatnipTheme, darkTheme, lightTheme } from '../../themes';

export interface CatnipProviderProps {
  children?: React.ReactNode;
  variant?: 'dark' | 'light';
  theme?: CatnipTheme;
}

function CatnipProvider(props: CatnipProviderProps) {
  const { children, variant = 'dark', theme: themeProp } = props;

  const theme = !themeProp ? (variant === 'dark' ? darkTheme : lightTheme) : themeProp;

  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
}

CatnipProvider.displayName = 'CatnipProvider';

export default CatnipProvider;

export const useTheme = () => useThemeUI() as unknown as { theme: CatnipTheme };
