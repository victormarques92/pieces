import React, { ButtonHTMLAttributes } from 'react';
import { Btn, ButtonStyleProps } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps & {
    onClick?: () => void;
  };

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'default',
  size = 'medium',
  block,
  onClick,
  children,
}) => {
  return (
    <Btn
      type={type}
      onClick={onClick}
      color={color}
      size={size}
      block={block}
    >
      {children}
    </Btn>
  );
};

export default Button;
