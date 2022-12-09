import React from 'react';

// export interface ButtonProps
//   extends React.Component<typeof HTMLButtonElement> {}

function Button(props) {
  const { children, ...other } = props;
  return (
    <button type='button' {...other}>
      {children}
    </button>
  );
}

Button.displayName = 'CatNipButton';

export default Button;
