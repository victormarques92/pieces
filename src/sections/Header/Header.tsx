import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { logo } from '../../assets';
import { Button, DropdownMenu, Search } from '../../components';
import { Container } from '../../styles/Grid';

import { BoxHeader, BoxStart, Logo } from './styles';

const Header: React.FC = () => {
  const [find, setFind] = useState('');

  return (
    <BoxHeader>
      <Container>
        <BoxStart>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>

          <DropdownMenu />
        </BoxStart>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gridGap: 32,
          }}
        >
          <Search
            placeholder="Pesquisar modelo ou designer"
            value={find}
            onChange={setFind}
          />

          <FiShoppingCart fontSize={20} />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gridGap: 12,
          }}
        >
          <Button>Upload</Button>
          <Button color="secondary">Mint</Button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gridGap: 12,
          }}
        >
          <button
            type="button"
            style={{
              background: 'transparent',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Login
          </button>
          <span>|</span>
          <button
            type="button"
            style={{
              background: 'transparent',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Sign up
          </button>
        </div>
      </Container>
    </BoxHeader>
  );
};

export default Header;
