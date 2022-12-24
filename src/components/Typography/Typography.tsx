import React from 'react';
import styled from '@emotion/styled';
import { CatnipTheme, baseTheme } from '../../themes/themes';
import { Interpolation } from '@emotion/react';

interface TypographyOptions {
  color?: 'textPrimary' | 'textSecondary';
  css?: Interpolation<CatnipTheme>;
  variant?: keyof typeof baseTheme.typography;
}

const TypographyBase = styled.span<TypographyOptions>(
  ({ css = {}, color, variant = 'body1', theme }) => {
    const { colors, typography } = theme as CatnipTheme;
    const textColor = color === 'textSecondary' ? colors.textSecondary : colors.textPrimary;

    return {
      ...typography[variant],
      color: textColor,
      padding: 5,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...css,
    };
  }
);

export type TypographyProps = React.ComponentProps<typeof TypographyBase>;

/**
 * Primary UI component for user interaction
 */
export const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
  return <TypographyBase ref={ref} {...props} />;
});

Typography.displayName = 'CatNipTypography';

export default Typography;
