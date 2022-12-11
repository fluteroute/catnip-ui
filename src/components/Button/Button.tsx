import React from 'react';
import styled from '@emotion/styled';
import { CatnipTheme } from '../../themes/themes';
import { Interpolation } from '@emotion/react';

interface ButtonOptions {
  css?: Interpolation<CatnipTheme>;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const ButtonBase = styled.button<ButtonOptions>(
  ({ css = {}, isDisabled, theme, variant = 'primary' }) => {
    const { colors, typography } = theme as CatnipTheme;

    const isPrimary = variant === 'primary';

    return {
      borderRadius: 10,
      borderStyle: 'solid',
      ...typography.button,
      ...(isPrimary
        ? {
            backgroundColor: isDisabled ? colors.disabled : colors.primary,
            borderWidth: 0,
            padding: 12,
            ':hover': {
              backgroundImage:
                !isDisabled &&
                `linear-gradient(to left, ${colors.lightenPrimary}, ${colors.primary})`,
              backgroundColor: isDisabled ? colors.disabled : colors.lightenPrimary,
              color: !isDisabled && colors.lightenTextPrimary,
            },
            ':focus, :focus-visible': {
              outline: isDisabled ? 'none' : colors.primary,
            },
          }
        : {
            backgroundColor: 'transparent',
            padding: 10,
            ':hover': {
              borderColor: isDisabled ? colors.disabled : colors.lightenPrimary,
              color: !isDisabled && colors.lightenTextPrimary,
            },
            ':focus, :focus-visible': {
              borderColor: isDisabled ? colors.disabled : colors.lightenPrimary,
              outline: isDisabled ? 'none' : colors.primary,
            },
            borderWidth: 2,
            borderColor: isDisabled ? colors.disabled : colors.primary,
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
