import styled from 'styled-components';
import theme from '../../theme';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  & > span {
    ${theme.typography.capition}
    font-weight: 700;
    margin-bottom: 4px;
  }

  & > input {
    border-radius: 4px;
    padding: 4px 8px;
    width: 100%;

    ${theme.typography.body[2]}
  }
`;
