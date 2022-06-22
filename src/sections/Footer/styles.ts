import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  display: flex;
  height: 48px;
  justify-content: center;
  width: 100%;

  & > p {
    color: ${theme.colors.grey[5]};
    font-size: 12px;
  }
`;
