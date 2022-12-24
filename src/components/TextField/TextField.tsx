import React from 'react';
import styled from '@emotion/styled';
import { CatnipTheme } from '../../themes';
import { Interpolation } from '@emotion/react';
import { Typography } from '../Typography';
import { v4 as uuidv4 } from 'uuid';

interface TextFieldOptions {
  css?: Interpolation<CatnipTheme>;
  isDisabled?: boolean;
}

const TextFieldBase = styled.input<TextFieldOptions>(({ css = {}, isDisabled, theme }) => {
  const { colors, typography } = theme as CatnipTheme;

  return {
    ...typography.body1,
    background: `linear-gradient(${colors.textPrimary}, ${colors.textPrimary}) bottom/ calc(100% - 2*3px) 3px no-repeat`,
    backgroundColor: isDisabled ? colors.disabled : 'transparent',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 0,
    color: colors.textPrimary,
    height: 25,
    padding: 5,
    margin: 5,
    width: '100%',
    ':focus, :focus-visible': {
      outline: 'none',
      boxShadow: !isDisabled && `0 7px 2px -2px ${colors.secondary}`,
    },
    ...(isDisabled && { opacity: 0.5 }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...css,
  };
});

export interface TextFieldProps extends React.ComponentProps<typeof TextFieldBase> {
  label?: string;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Primary UI component for user interaction
 */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ isDisabled, isRequired = false, label, onChange, placeholder, ...props }, ref) => {
    const labelId = uuidv4();
    const handleChange = (event: any) => {
      if (isDisabled || !onChange) return;

      onChange(event);
    };

    return (
      <>
        {label && (
          <Typography
            as="label"
            id={labelId}
            variant="label"
            color="textSecondary"
            css={{ marginLeft: '6px' }}
          >
            {label}
            {isRequired && '*'}
          </Typography>
        )}
        <TextFieldBase
          aria-labelledby={labelId}
          disabled={isDisabled ? true : undefined}
          isDisabled={isDisabled}
          onChange={handleChange}
          placeholder={!isDisabled ? placeholder : undefined}
          ref={ref}
          required={isRequired && true}
          {...props}
        />
      </>
    );
  }
);

TextField.displayName = 'CatNipTextField';

export default TextField;
