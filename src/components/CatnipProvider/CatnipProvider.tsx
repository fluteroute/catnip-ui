import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CatnipTheme, catnipTheme } from '../../themes/themes';
import { useTheme as useEmotionTheme } from '@emotion/react';

export interface CatnipProviderProps {
  children?: React.ReactNode;
  variant?: 'default';
  theme?: Pick<React.ComponentProps<ThemeProvider>, 'theme'>;
}

function CatnipProvider(props: CatnipProviderProps) {
  const { children, variant = 'default', theme: themeProp } = props;

  const theme = variant === 'default' && !themeProp ? catnipTheme : themeProp;

  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
}

CatnipProvider.displayName = 'CatnipProvider';

export default CatnipProvider;

export const useTheme = () => {
  const theme = useEmotionTheme();

  return theme as CatnipTheme;
};
