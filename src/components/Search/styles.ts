import styled from 'styled-components';
import theme from '../../theme';

export const BoxSearch = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  display: flex;
  height: 40px;
  padding-inline: 16px;
  gap: 12px;
  width: 632px;

  & > svg {
    font-size: 20px;
  }

  & > input {
    color: ${theme.colors.grey[5]};
    width: 100%;

    ${theme.typography.body[2]}
  }
`;
