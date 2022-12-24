import React from 'react';
import styled from '@emotion/styled';
import { CatnipTheme } from '../../themes';
import { Interpolation } from '@emotion/react';

interface ButtonOptions {
  css?: Interpolation<CatnipTheme>;
  isDisabled?: boolean;
  variant?: 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline';
}

const ButtonBase = styled.button<ButtonOptions>(
  ({ css = {}, isDisabled, theme, variant = 'primary' }) => {
    const { typography, components } = theme as CatnipTheme;
    const { disabled, disabledOutline, primary, primaryOutline, secondary, secondaryOutline } =
      components.button;

    return {
      borderRadius: 20,
      borderStyle: 'solid',
      ...typography.button,
      ...(variant === 'primary' && {
        borderWidth: 0,
        padding: 12,
        ...(isDisabled ? disabled : primary),
      }),
      ...(variant === 'primaryOutline' && {
        backgroundColor: 'transparent',
        borderWidth: 2,
        padding: 10,
        ...(isDisabled ? disabledOutline : primaryOutline),
      }),
      ...(variant === 'secondary' && {
        borderWidth: 0,
        padding: 12,
        ...(isDisabled ? disabled : secondary),
      }),
      ...(variant === 'secondaryOutline' && {
        backgroundColor: 'transparent',
        borderWidth: 2,
        padding: 10,
        ...(isDisabled ? disabledOutline : secondaryOutline),
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
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isDisabled, onClick, ...props }, ref) => {
    const handleClick = () => {
      if (isDisabled || !onClick) return;

      onClick();
    };

    return (
      <ButtonBase isDisabled={isDisabled} onClick={handleClick} ref={ref} type="button" {...props}>
        {children}
      </ButtonBase>
    );
  }
);

Button.displayName = 'CatNipButton';

export default Button;
