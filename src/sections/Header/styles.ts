import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const BoxHeader = styled.div`
  background-color: ${theme.colors.grey[1]};
  padding-block: 16px;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  & > img {
    max-width: 40px;
  }
`;

export const BoxStart = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
`;

export const BoxSearch = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.grey[5]};

  ${theme.typography.body[2]}
`;

export const BoxMiddle = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
`;

export const ButtonCart = styled(Link)`
  display: inline-flex;
  color: ${theme.colors.grey[5]};
  font-size: 24px;
`;

export const BoxActions = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export const BoxEnd = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;
