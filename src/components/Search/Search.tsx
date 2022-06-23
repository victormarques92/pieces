import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BoxSearch } from './styles';

interface SearchProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <BoxSearch>
      <FiSearch />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </BoxSearch>
  );
};

export default Search;
