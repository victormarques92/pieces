import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <button type="button">Button 1</button>
      <button type="button">Button 2</button>
    </Container>
  );
};

export default Header;
