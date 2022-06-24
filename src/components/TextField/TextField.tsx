import React, { HTMLInputTypeAttribute } from 'react';
import { Label } from './styles';

interface InputProps {
  id: string;
  value: string | number;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<InputProps> = ({
  id,
  type,
  value,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <Label htmlFor={id}>
      <span>{label}</span>

      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </Label>
  );
};

export default TextField;
