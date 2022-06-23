import styled from 'styled-components';
import theme from '../../theme';

export const BoxImage = styled.div`
  align-items: center;
  background-color: ${theme.colors.grey[3]};
  border-radius: 50%;
  color: ${theme.colors.white};
  display: inline-flex;
  height: 40px;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  overflow: hidden;
  width: 40px;

  ${theme.typography.heading[6]}

  & > img {
    height: inherit;
    object-fit: cover;
    width: inherit;
  }
`;
