import React from 'react';
import styled from '@emotion/styled';
import { CatnipTheme } from '../../themes/themes';
import { Interpolation } from '@emotion/react';

interface ButtonOptions {
  css?: Interpolation<CatnipTheme>;
  isDisabled?: boolean;
  variant?: 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline';
}

const ButtonBase = styled.button<ButtonOptions>(
  ({ css = {}, isDisabled, theme, variant = 'primary' }) => {
    const { colors, typography, mode } = theme as CatnipTheme;

    console.log(theme);

    const disabled = {
      backgroundColor: colors.disabled,
      ':hover': {
        backgroundColor: colors.disabled,
      },
      ':focus, :focus-visible': {
        outline: 'none',
      },
    };

    const disabledOutline = {
      ':hover': {
        borderColor: colors.disabled,
        color: colors.disabled,
      },
      ':focus, :focus-visible': {
        borderColor: colors.disabled,
        color: colors.disabled,
        outline: 'none',
      },
      borderColor: colors.disabled,
      color: colors.disabled,
    };

    return {
      borderRadius: 20,
      borderStyle: 'solid',
      ...typography.button,
      ...(variant === 'primary' && {
        borderWidth: 0,
        color: colors.textPrimary,
        padding: 12,
        ...(isDisabled
          ? disabled
          : {
              backgroundColor: colors.primary,
              ':hover': {
                backgroundImage: `linear-gradient(to left, ${colors.lightenPrimary}, ${colors.primary})`,
                backgroundColor: colors.lightenPrimary,
                color: colors.lightenTextPrimary,
              },
              ':focus, :focus-visible': {
                outline: colors.primary,
              },
            }),
      }),
      ...(variant === 'primaryOutline' && {
        backgroundColor: 'transparent',
        borderWidth: 2,
        padding: 10,
        ...(isDisabled
          ? disabledOutline
          : {
              color: mode === 'dark' ? colors.textPrimary : colors.primary,
              ':hover': {
                borderColor: colors.lightenPrimary,
              },
              ':focus, :focus-visible': {
                borderColor: colors.lightenPrimary,
                outline: colors.primary,
              },
              borderColor: colors.primary,
            }),
      }),
      ...(variant === 'secondary' && {
        borderWidth: 0,
        color: colors.textPrimary,
        padding: 12,
        ...(isDisabled
          ? disabled
          : {
              backgroundColor: colors.secondary,
              ':hover': {
                backgroundImage: `linear-gradient(to left, ${colors.lightenSecondary}, ${colors.secondary})`,
                backgroundColor: colors.lightenSecondary,
                color: colors.lightenTextPrimary,
              },
              ':focus, :focus-visible': {
                outline: colors.secondary,
              },
            }),
      }),
      ...(variant === 'secondaryOutline' && {
        backgroundColor: 'transparent',
        borderWidth: 2,
        padding: 10,
        ...(isDisabled
          ? disabledOutline
          : {
              color: mode === 'dark' ? colors.textPrimary : colors.secondary,
              ':hover': {
                borderColor: colors.lightenSecondary,
              },
              ':focus, :focus-visible': {
                borderColor: colors.lightenSecondary,
                outline: colors.secondary,
              },
              borderColor: colors.secondary,
            }),
      }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...css,
    };
  }
);

export interface ButtonProps extends React.ComponentProps<typeof ButtonBase> {
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, isDisabled, onClick, ...props }: ButtonProps) => {
  const handleClick = () => {
    if (isDisabled || !onClick) return;

    onClick();
  };

  return (
    <ButtonBase type="button" isDisabled={isDisabled} onClick={handleClick} {...props}>
      {children}
    </ButtonBase>
  );
};
