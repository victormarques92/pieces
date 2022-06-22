import React from 'react';
import { Footer, Header } from '../../sections';
import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />

      <main>{children}</main>

      <Footer />
    </Container>
  );
};

export default Layout;
