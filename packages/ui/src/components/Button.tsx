import { ComponentProps } from 'react';
import { storiesButton, StoriesButtonProps } from './Button.css';

interface ButtonProps extends ComponentProps<'button'> {
  bg: StoriesButtonProps['bg'];
}

const Button = ({ bg, ...props }: ButtonProps) => {
  return (
    <button className={storiesButton({ bg })} {...props}>
      {bg === 'primary' ? 'primaryButton' : 'secondaryButton'}
    </button>
  );
};

export default Button;
