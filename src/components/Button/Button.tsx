import React from 'react';

// export interface ButtonProps
//   extends React.Component<typeof HTMLButtonElement> {}

function Button(props: any) : React.ReactNode {
  return <button type='button' {...props} />;
}

Button.displayName = 'CatNipButton';

export default Button;
