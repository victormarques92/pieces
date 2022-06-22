import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.base.white};
  display: flex;
  height: 48px;
  justify-content: center;
  width: 100%;

  & > p {
    color: #1a1818;
    font-size: 12px;
  }
`;
