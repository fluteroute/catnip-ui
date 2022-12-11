import React from 'react';
import styled from '@emotion/styled';
import { CatnipTheme } from '../../themes/themes';
import { Interpolation } from '@emotion/react';

export interface ButtonProps {
  children: React.ReactNode;
  css?: Interpolation<CatnipTheme>;
  variant?: 'primary' | 'secondary';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const ButtonBase = styled.button(
  ({
    theme = {} as CatnipTheme,
    variant = 'primary',
    css = {},
  }: ButtonProps & { theme?: CatnipTheme }) => {
    const { colors, typography } = theme;

    const isPrimary = variant === 'primary';

    return {
      backgroundColor: isPrimary ? colors.primary : 'transparent',
      padding: isPrimary ? 14 : 12,
      borderRadius: 20,
      borderStyle: 'solid',
      ...typography.button,
      ...(isPrimary
        ? {
            borderWidth: 0,
            ':hover': {
              backgroundImage: `linear-gradient(to left, ${colors.lightenPrimary}, ${colors.primary})`,
              backgroundColor: colors.lightenPrimary,
            },
            ':focus, :focus-visible': {
              backgroundImage: `linear-gradient(to left, ${colors.lightenPrimary}, ${colors.primary})`,
              backgroundColor: colors.lightenPrimary,
              outline: colors.primary,
            },
          }
        : {
            ':hover': {
              borderColor: colors.lightenPrimary,
            },
            ':focus, :focus-visible': {
              borderColor: colors.lightenPrimary,
            },
            borderWidth: 2,
            borderColor: colors.primary,
          }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...css,
    };
  }
);

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonBase type="button" {...props}>
      {children}
    </ButtonBase>
  );
};
