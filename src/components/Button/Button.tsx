import React, { ButtonHTMLAttributes } from 'react';
import { Btn, ButtonStyleProps } from './styles';

// import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps & {
    onClick?: () => void;
  };

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'primary',
  size = 'medium',
  onClick,
  children,
}) => {
  return (
    <Btn type={type} onClick={onClick} color={color} size={size}>
      {children}
    </Btn>
  );
};

export default Button;