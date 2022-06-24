import React, { useState } from 'react';
import { FiChevronDown, FiShoppingCart } from 'react-icons/fi';
import { logo } from '../../assets';
import {
  Button,
  DropdownMenu,
  Popover,
  Search,
} from '../../components';
import { Container } from '../../styles/Grid';
import Login from '../Login';
import dataList from './dataList';

import {
  BoxActions,
  BoxEnd,
  BoxHeader,
  BoxMiddle,
  BoxStart,
  ButtonCart,
  Logo,
} from './styles';

const Header: React.FC = () => {
  const [find, setFind] = useState('');

  return (
    <BoxHeader>
      <Container>
        <BoxStart>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>

          <DropdownMenu
            trigger={
              <Button>
                Explorer <FiChevronDown />
              </Button>
            }
            data={dataList}
          />
        </BoxStart>

        <BoxMiddle>
          <Search
            placeholder="Pesquisar modelo ou designer"
            value={find}
            onChange={setFind}
          />

          <ButtonCart to="/cart">
            <FiShoppingCart />
          </ButtonCart>
        </BoxMiddle>

        <BoxActions>
          <Button color="primary">Upload</Button>
        </BoxActions>

        <BoxEnd>
          <Popover
            trigger={
              <Button color="default" size="small">
                Login
              </Button>
            }
            content={<Login />}
          />

          <Button color="secondary" size="small">
            Sign up
          </Button>
        </BoxEnd>
      </Container>
    </BoxHeader>
  );
};

export default Header;
