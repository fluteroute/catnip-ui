import React from 'react';

// export interface ButtonProps
//   extends React.Component<typeof HTMLButtonElement> {}

function Button(props: any): JSX.Element {
  return <button type='button' {...props} />;
}

Button.displayName = 'CatNipButton';

export default Button;
